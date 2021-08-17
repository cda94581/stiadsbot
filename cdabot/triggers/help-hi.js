const { embedcolors } = require('../config.json');
const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
	names: [ 'hi', 'hello', 'hey', 'heyy' ],
	type: 'exact',
	channels: config.triggers.helpHi.channels,
	execute(message) {
		message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.trigger).setTitle('Seriously. You don\'t need to greet us to ask a question.').setDescription('Ask your question! By greeting, you\'re just wasting time. Read more: https://www.nohello.com/') ]});
	}
}