const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'modmessage',
	description: 'Mods may use this to privately DM you asking for [additional] information',
	usage: '<user> <message>',
	perms: [ 'BAN_MEMBERS', 'KICK_MEMBERS' ],
	args: true,
	// roles: [ 'Moderator', 'Helper' ],
	execute(message, args) {
		const modmessageEmbed = new Discord.MessageEmbed().setColor('#cc0000').setTitle('Incoming Mod Message').setDescription(message.content.slice(`${prefix}modmessage ${args[0]}`.length));
		if (message.attachments){
			const attachments = message.attachments.map(m => m.url);
			modmessageEmbed.attachFiles(attachments);
		}
		try {
			message.client.users.cache.get(args[0]).send(modmessageEmbed);
			message.channel.send('Message Sent Successfully');
		} catch {
			message.channel.send('I couldn\'t DM that user');
		}
	},
};