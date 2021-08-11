const Discord = require('discord.js');
const { modifications } = require('../config.json');

module.exports = (message, client) => {
	if (message.channel.type != 'DM' || message.author.bot || !message.content.toLowerCase().startsWith('modification submission')) return;
	if (!modifications.open) return message.channel.send({ content: 'Sorry, Modification submissions are closed at this time' });
	const attachments = message.attachments.map(m => m.url);
	const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`Modification Submission - ${message.author.username}#${message.author.discriminator}`).setDescription(message.content);
	client.channels.cache.find(channel => channel.id == modifications.channel).send({ embeds: embed, files: attachments }).then(sentMsg => sentMsg.react('👍'));
	try {
		message.channel.send({ content: 'Message Sent!' });
	} catch {}
}