const Discord = require('discord.js');
const { moviewriterapplicationchannel } = require('../config.json');

module.exports = (message, client) => {
	if (message.channel.type != 'dm' || !message.content.toLowerCase().startsWith('movie writer application:')) return;
	const applicationEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`New Movie Writer Application: ${message.author.username}#${message.author.discriminator} - ${message.author.id}`).setDescription(message.content);
	client.channels.cache.find(channel => channel.id == moviewriterapplicationchannel).send(applicationEmbed);
	try {
		message.channel.send('Movie Application Sent!');
	} catch {}
}