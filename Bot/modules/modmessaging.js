const Discord = require('discord.js');
const { modmessagingchannel } = require('../config.json');

module.exports = (message, client) => {
	if (message.channel.type != 'dm') return;
	const modmessageEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`New Message: ${message.author.username}#${message.author.discriminator} - ${message.author.id}`).setDescription(message.content);
	client.channels.cache.find(channel => channel.id == modmessagingchannel).send(modmessageEmbed);
	try {
		message.channel.send('Message Sent!');
	} catch {}
}