const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('../config.json');

let modcmds = new Discord.Collection();
let modcmdFiles = fs.readdirSync('./commands/modcmd').filter(file => file.endsWith('.js'));

for (const file of modcmdFiles) {
	const modcmd = require(`./modcmd/${file}`);
	modcmds.set(modcmd.name, modcmd);
}

module.exports = {
	name: 'modcmd',
	description: 'Commands for moderators and stuff',
	usage: '[help|modcmd name]',
	modcmds: modcmds, // For the modcmd help
	execute(message, args) {
		if (!args.length) return message.channel.send(new Discord.MessageEmbed().setColor('#444444').setTitle('Mod Commands').setDescription('These are commands for people with certain permissions. Use the `modcmd help` command to get a list of all commands. Use `modcmd [modcmd name]` (without brackets) to use the command.'));

		// Dynamic modcmds
		const modcmdArgs = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
		modcmdArgs.shift();
		const modcmdName = modcmdArgs.shift().toLowerCase(); // Sets the 'modcmd' input

		const modcmd = modcmds.get(modcmdName); // Gets the modcmd corresponding
		if (!modcmd) return; // If couldn't get a modcmd

		if (modcmd.perms && !message.member.hasPermission(modcmd.perms)) return message.channel.send('You don\'t have the permission to use this command');

		// Attempts to execute modcmd
		try {
			modcmd.execute(message, modcmdArgs);
		} catch (error) {
			console.error(error);
			message.channel.send('There was an error trying to execute that Mod Command');
		}
	}
}