//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { blush } = require('./interactiongifs.json');

module.exports = {
	name: 'blush',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send('You need to mention users');
		const randomNum = Math.floor(Math.random() * blush.length);
		const blushEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(blush[randomNum]);
		message.channel.send(blushEmbed);
	},
};