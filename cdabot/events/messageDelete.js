const Discord = require('discord.js');

module.exports = message => {
	if (message.partial) {
		const desc = `A message was deleted, but it is a partial message, so I can't fetch any more information.`;
		index.log(message, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Message Deleted').setDescription(desc).setTimestamp(Date.now()));
		return console.log(`> ${Date().toString()}\t-\tMessage Deleted:\n${desc}`);
	}
	const index = require('./index');

	const desc = message.content;
	const embed = new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Message by ${message.author.username}#${message.author.discriminator} Deleted in #${message.channel.name}`).setDescription(desc).setTimestamp(Date.now());

	if (message.attachments) {
		embed.attachFiles(message.attachments.map(m => m.url));
		console.log(`\n\nAttachments:\n${message.attachments.map(m => m.name).join('\n')}`);
	}

	index.log(message, embed);
	console.log(`> ${Date().toString()}\t-\tMessage by ${message.author.username}#${message.author.discriminator} Deleted in #${message.channel.name}:\n${desc}`);
}