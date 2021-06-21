const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = message => {
	const desc = message.content;
	const embed = new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Message Deleted by ${message.author.username}#${message.author.discriminator} in #${message.channel.name}`).setDescription(desc).setTimestamp(Date.now());
	console.log(`> ${Date().toString()}\t-\tMessage Deleted by ${message.author.username}#${message.author.discriminator} in #${message.channel.name}:\n${desc}`);
	if (message.attachments) {
		embed.attachFiles(message.attachments.map(m => m.url));
		console.log(`\n\nAttachments:\n${message.attachments.map(m => m.name).join('\n')}`);
	}
	message.client.channels.cache.get(logchannel).send(embed);
}