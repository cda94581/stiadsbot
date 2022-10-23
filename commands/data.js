const Discord = require('discord.js');

module.exports = {
	name: 'data',
	description: 'Don\'t ask to ask, just ask!',
	aliases: [ 'dontasktoask', 'don\'tasktoask' ],
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Don\'t ask to ask, just ask').setURL('https://dontasktoask.com').setThumbnail('https://dontasktoask.com/favicon.png');
		message.channel.send({ embeds: [ embed ]});
	}
}