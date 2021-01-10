//Get the prefix value for later use
const {
	prefix
} = require('../config.json');

// Add embed in future
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help',
	aliases: [ 'commands' ],
	usage: '[command name]',
	execute(message, args) {
		const data = [];
		const {
			commands
		} = message.client;
		var helpEmbed;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:\`');
			data.push(commands.map(command => command.name).join('\n'));
			data.push(`\`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

			helpEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('**STIADS:eyes: Bot Help**').setDescription(data);

			return message.channel.send(helpEmbed);
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.channel.send('That\'s not a valid command!');
		}

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 0} second(s)`);

		helpEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(command.name).setDescription(data);

		message.channel.send(helpEmbed);
	},
};