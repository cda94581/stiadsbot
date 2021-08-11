//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { bite } = require('./interactiongifs.json');

module.exports = {
	name: 'bite',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send({ content: 'You need to mention users' });
		const randomNum = Math.floor(Math.random() * bite.length);
		const biteEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(bite[randomNum]);
		message.channel.send({ embeds: [ biteEmbed ]});
	},
};