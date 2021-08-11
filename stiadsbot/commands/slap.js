//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of interaction gifs
const { slap } = require('./interactiongifs.json');

module.exports = {
	name: 'slap',
	description: 'Lazy Description',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) return message.channel.send({ content: 'You need to mention users' });
		const randomNum = Math.floor(Math.random() * slap.length);
		const slapEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(slap[randomNum]);
		message.channel.send({ embeds: [ slapEmbed ]});
	},
};