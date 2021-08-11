const Discord = require('discord.js');
const { modmessagingchannel } = require('../config.json');

module.exports = (message, client) => {
	if (message.channel.type != 'DM' || message.author.bot) return;
	let modmessageEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`New Message: ${message.author.username}#${message.author.discriminator} - ${message.author.id}`).setDescription(message.content);
	const attachments = message.attachments.map(m => m.url);
	client.channels.cache.find(channel => channel.id == modmessagingchannel).send({ embeds: [ modmessageEmbed ], files: attachments });
	try {
		message.channel.send({ content: 'Message Sent!' });
	} catch {}
}