//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of animal pics
const { cats } = require('./animals.json');

module.exports = {
	name: 'cat',
	description: 'Kitty Cat!',
	type: 'fun',
	execute(message, args) {
		const randomNum = Math.floor(Math.random() * cats.length); //Random number is a random between 0 and 1, multiplied by the dogs array length, rounded down.
		const catEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(randomNum == 0 ? 'ZCAT!!!' : 'KITTY CAT!!!').setImage(cats[randomNum]).setFooter('Image source: ' + cats[randomNum] + '\nPicture suggestions from https://www.pexels.com are accepted in #feedback-suggestions');
		message.channel.send(catEmbed);
	},
};