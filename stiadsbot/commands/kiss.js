//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { kiss } = require('./interactiongifs.json');

module.exports = {
	name: 'kiss',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send('You need to mention users');
		const randomNum = Math.floor(Math.random() * kiss.length);
		const kissEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(kiss[randomNum]);
		message.channel.send(kissEmbed);
	},
};