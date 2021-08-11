//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { hug } = require('./interactiongifs.json');

module.exports = {
	name: 'hug',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send({ content: 'You need to mention users' });
		const randomNum = Math.floor(Math.random() * hug.length);
		const hugEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(hug[randomNum]);
		message.channel.send({ embeds: [ hugEmbed ]});
	},
};