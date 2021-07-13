const Discord = require('discord.js');

module.exports = message => {
	const index = require('./index');

	const desc = message.content;
	const embed = new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Message Deleted by ${message.author.username}#${message.author.discriminator} in #${message.channel.name}`).setDescription(desc).setTimestamp(Date.now());
	if (message.attachments) {
		embed.attachFiles(message.attachments.map(m => m.url));
		console.log(`\n\nAttachments:\n${message.attachments.map(m => m.name).join('\n')}`);
	}

	index.log(message, embed);
	console.log(`> ${Date().toString()}\t-\tMessage Deleted by ${message.author.username}#${message.author.discriminator} in #${message.channel.name}:\n${desc}`);
}