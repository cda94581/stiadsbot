const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { ball8, cat, dog, bite, blush, hug, kiss, nuzzle, poke, pout, slap, stare } = require('./random.json');

module.exports = {
	name: 'random',
	description: 'Handles Commands with Random Responses',
	aliases: [ 'ball8', 'bite', 'blush', 'cat', 'dog', 'hug', 'kiss', 'nuzzle', 'poke', 'pout', 'slap', 'stare' ],
	type: 'fun',
	execute(message = Discord.Message.prototype) {
		const commandName = message.content.slice(prefix.length).trim().split(/ +/)[0];
		if (commandName == 'action') return;
		const randomNum = Math.floor(Math.random() * eval(commandName).length);
		let embed = null;

		if ([ 'ball8' ].some(x => commandName == x)) embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('').setDescription(eval(commandName)[randomNum]);
		else if (['cat', 'dog'].some(x => commandName == x)) embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setImage(eval(commandName)[randomNum]);
		else embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Lazy Title').setThumbnail(eval(commandName)[randomNum]);

		message.channel.send({ embeds: [ embed ]});
	}
}