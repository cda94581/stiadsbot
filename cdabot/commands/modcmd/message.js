const Discord = require('discord.js');
const { prefix, embedcolors } = require('../../config/config.json');

module.exports = {
	name: 'message',
	description: 'Mods may use this to privately DM you asking for [additional] information',
	usage: '<user> <message>',
	perms: [ 'BAN_MEMBERS', 'KICK_MEMBERS' ],
	args: true,
	// roles: [ 'Moderator', 'Helper' ],
	execute(message, args) {
		const modmessageEmbed = new Discord.MessageEmbed().setColor(embedcolors.command).setTitle('Incoming Mod Message').setDescription(message.content.slice(`${prefix}modcmd message ${args[0]}`.length));
		const attachments = message.attachments.map(m => m.url);
		try {
			message.client.users.cache.get(args[0]).send({ embeds: [ modmessageEmbed ], files: attachments });
			message.channel.send({ content: 'Message Sent Successfully' });
		} catch {
			message.channel.send({ content: 'I couldn\'t DM that user' });
		}
	},
};