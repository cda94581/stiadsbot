const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'modmessage',
	description: 'Mods may use this to privately DM you asking for [additional] information',
	usage: '<user> <message>',
	perms: [ 'BAN_MEMBERS', 'KICK_MEMBERS' ],
	args: true,
	type: 'moderation',
	// roles: [ 'Moderator', 'Helper' ],
	execute(message, args, client) {
		const modmessageEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Incoming Mod Message').setDescription(message.content.slice(`${prefix}modmessage ${args[0]}`.length));
		try {
			client.users.cache.get(args[0]).send({ embeds: [ modmessageEmbed ]});
			message.channel.send({ content: 'Message Sent Successfully' });
		} catch {
			message.channel.send({ content: 'I couldn\'t DM that user' });
		}
	},
};