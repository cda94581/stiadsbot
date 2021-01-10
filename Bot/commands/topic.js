//Requires this module for embeds
const Discord = require('discord.js');
//Loads list of questions
const { topics } = require('./topics.json');

module.exports = {
	name: 'topic',
    description: 'A Random Topic',
    channels: [ 'topic' ],
	execute(message, args) {
        const topicEmbed = new Discord.MessageEmbed().setColor('#ff0000').setDescription(topics[Math.floor(Math.random() * topics.length)]);
		message.channel.send(topicEmbed);
	},
};