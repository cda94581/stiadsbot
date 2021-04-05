//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { pout } = require('./interactiongifs.json');

module.exports = {
	name: 'pout',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send('You need to mention users');
		const randomNum = Math.floor(Math.random() * pout.length);
		const poutEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(pout[randomNum]);
		message.channel.send(poutEmbed);
	},
};