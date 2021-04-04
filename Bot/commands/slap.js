//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of animal pics
const { slap } = require('./interactiongifs.json');

module.exports = {
	name: 'slap',
	description: 'Owie',
	args: true,
	usage: '<mention users>',
	type: 'action',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send('You need to mention users');
		}
		const randomNum = Math.floor(Math.random() * slap.length); //Random number is a random between 0 and 1, multiplied by the dogs array length, rounded down.
		const slapEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('this must hurt').setImage(slap[randomNum]).setFooter('Image source: ' + slap[randomNum] + '\nGIF suggestions from https://www.tenor.com are accepted in #feedback-suggestions');
		message.channel.send(slapEmbed);
	},
};