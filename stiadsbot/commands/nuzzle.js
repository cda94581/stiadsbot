//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { nuzzle } = require('./interactiongifs.json');

module.exports = {
	name: 'nuzzle',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send({ content: 'You need to mention users' });
		const randomNum = Math.floor(Math.random() * nuzzle.length);
		const nuzzleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(nuzzle[randomNum]);
		message.channel.send({ embeds: [ nuzzleEmbed ]});
	},
};