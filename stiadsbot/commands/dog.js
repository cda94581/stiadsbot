//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of animal pics
const { dogs } = require('./animals.json');

module.exports = {
	name: 'dog',
	description: 'Doggy! Do I need to say anything else?',
	type: 'fun',
	execute(message, args) {
		const randomNum = Math.floor(Math.random() * dogs.length); //Random number is a random between 0 and 1, multiplied by the dogs array length, rounded down.
		const dogEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(randomNum == 0 ? 'SMH DONT SMOKE DOG' : 'DOGGY!!!').setImage(dogs[randomNum]).setFooter('Image source: ' + dogs[randomNum] + '\nPicture suggestions from https://www.pexels.com are accepted in #feedback-suggestions');
		message.channel.send({ embeds: [ dogEmbed ]});
	},
};