const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = (message = Discord.Message.prototype) => {
	const { misc: { modifications } } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config.json'), 'utf8'));
	if (message.channel.type != 'DM' || message.author.bot || !message.content.toLowerCase().startsWith('modification submission')) return;
	if (!modifications.open) return message.channel.send({ content: 'Sorry, Modification submissions are closed at this time' });
	const attachments = message.attachments.map(m => m.url);
	const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`Modification Submission - ${message.author.username}#${message.author.discriminator}`).setDescription(message.content);
	message.client.channels.cache.find(channel => channel.id == modifications.channel).send({ embeds: [ embed ], files: attachments }).then(sentMsg => sentMsg.react('👍'));
	try { message.react('✅'); } catch {}
}