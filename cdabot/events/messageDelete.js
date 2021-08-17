const { embedcolors } = require('../config.json');
const Discord = require('discord.js');

module.exports = message => {
	if (message.partial) {
		const desc = `A message was deleted, but it is a partial message, so I can't fetch any more information.`;
		index.log(message, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Message Deleted').setDescription(desc).setTimestamp(Date.now()));
		return console.log(`> ${Date().toString()}\t-\tMessage Deleted:\n${desc}`);
	}
	const index = require('./index');

	const desc = message.content;
	const embed = new Discord.MessageEmbed().setColor(embedcolors.log).setTitle(`Message by ${message.author.tag} Deleted in #${message.channel.name}`).setDescription(desc).setTimestamp(Date.now());

	const attachments = message.attachments.map(m => m.url);
	console.log(`\n\nAttachments:\n${message.attachments.map(m => m.name).join('\n')}`);

	index.log(message, embed, attachments);
	console.log(`> ${Date().toString()}\t-\tMessage by ${message.author.tag} Deleted in #${message.channel.name}:\n${desc}`);
}