const xpCooldowns = new Set();
const { prefix, modmessagingchannel, levelinfo, embedcolors } = require('../config/config.json');
const bannedwords = require('../config/bannedwords.json');
const Discord = require('discord.js');
const fs = require('fs-extra');
const path = require('path');

module.exports = message => {
	if (message.author.bot) return; // Makes sure it wasn't a bot
	if (moderation()) {
		leveling();
		json_format();
		modmessaging();
		runCommand();
		runTrigger();
	}

	function moderation() {
		if (message.channel.type == 'DM' || message.author.id == message.guild.ownerID) return true;
		if (bannedwords.some(phrase => message.content.toLowerCase().includes(phrase))) {
			message.delete();
			message.channel.send({ content: `${message.author}, you aren't allowed to say this phrase.` }).then(sentMsg => {
				setTimeout(() => {
					sentMsg.delete();
				}, 5000);
			});
			return false;
		} else return true;
	}

	function leveling() {
		const author = message.author.id;
		if (levelinfo.blacklist.channels.includes(message.channel.id) || levelinfo.blacklist.users.includes(author) || message.channel.type == 'DM' || message.content.startsWith(prefix) || message.author.bot) return;

		if (xpCooldowns.has(author)) return;

		xpCooldowns.add(author);
		setTimeout(() => {
			xpCooldowns.delete(author);
		}, 60000);

		const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);

		if (!fs.existsSync(filePath)) {
			fs.outputFileSync(filePath, `{"id":"${author}","level":0,"xp":0,"messages":0}`, 'utf-8', err => {
				if (err) throw err;
			});
		}
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) throw err;
			let text = JSON.parse(data);
			const addXp = Math.floor(Math.random() * 11) + 15;
			text.xp += addXp;
			text.messages++;
			const xpToLevel = 5 * (text.level ** 2) + 50 * text.level + 100;
			if (xpToLevel <= text.xp) {
				text.xp -= xpToLevel;
				text.level++;
				message.channel.send({ content: `Nice chatting, ${message.author}, you've advanced to level ${text.level}!` });
			}
			if (levelinfo.levels.includes(text.level)) {
				const roleToAdd = levelinfo.roles[levelinfo.levels.indexOf(text.level)];
				const role = message.member.guild.roles.cache.find(role => role.id == roleToAdd);
				message.member.roles.add(role);
			}
			fs.writeFile(filePath, JSON.stringify(text), 'utf-8', err => { if (err) throw err });
		});
	}

	function json_format() {
		let valid = false;
		let data;
		let text = message.content;
		try {
			data = JSON.parse('{' + text + '}');
			valid = true;
		} catch { }
		try {
			data = JSON.parse('[' + text + ']');
			valid = true;
		} catch { }
		try {
			data = JSON.parse(text);
			valid = true;
		} catch { }
		if (valid && text.length > 60) {
			message.channel.send({ content: `Hey, ${message.member.displayName}, I've formatted the JSON for you!\n\`\`\`json\n${JSON.stringify(data, null, '\t')}\`\`\`` });
		}
	}

	function modmessaging() {
		if (message.channel.type != 'DM' || message.author.bot) return;
		let modmessageEmbed = new Discord.MessageEmbed().setColor(embedcolors.log).setTitle(`New Message: ${message.author.tag} - ${message.author.id}`).setDescription(message.content);
		const attachments = message.attachments.map(m => m.url);
		message.client.channels.cache.find(channel => channel.id == modmessagingchannel).send({ embeds: [ modmessageEmbed ], files: attachments });
		try {
			message.channel.send({ content: 'Message Sent!' });
		} catch { }
	}

	function runCommand() {
		if (!message.content.startsWith(prefix)) return; // Makes sure it starts with prefix
		const args = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
		const commandName = args.shift().toLowerCase(); // Sets the 'command' input

		const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // Gets the command corresponding
		if (!command) return; // If couldn't get a command

		if (command.guildOnly && message.channel.type == 'DM') return message.channel.send({ content: 'I can\'t execute this command inside DMs' }); // If guildOnly
		if (command.perms) {
			for ( i in command.perms) {
				if (!message.member.permissions.has(eval(`Discord.Permissions.FLAGS.${command.perms[i]}`))) return message.channel.send({ content: 'You don\'t have the permission to use this command' }); // If requires certain permission
			}
		}

		// If required arguments, and doesn't have any
		if (command.args && !args.length) {
			let reply = 'You didn\'t provide any arguments';
			if (command.usage) reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``; // If has a usage, add it to the reply
			return message.channel.send({ content: reply }); // Send reply
		}

		// Attempts to execute command
		try {
			message.channel.sendTyping();
			setTimeout(() => {
				return command.execute(message, args);
			}, 2000);
		} catch (error) {
			console.error(error);
			return message.channel.send({ content: 'There was an error trying to execute that command' });
		}
	}

	function runTrigger() {
		for (const trigger of message.client.triggers) {
			if (trigger[1].type == 'contain' && !trigger[1].names.some(name => message.content.toLowerCase().includes(name))) return;
			if (trigger[1].type == 'exact' && !trigger[1].names.some(name => message.content.toLowerCase() == name)) return;
			if (trigger[1].channels && !trigger[1].channels.some(channel => message.channel.id == channel)) return;
			try {
				message.channel.sendTyping();
				setTimeout(() => {
					return trigger[1].execute(message);
				}, 2000);
			} catch (error) {
				console.error(error);
				return message.channel.send({ content: 'There was an error trying to execute that trigger' });
			}
		}
	}
}