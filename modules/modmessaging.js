const Discord = require('discord.js');
const { misc: { modMessaging } } = require('../config.json');

module.exports = (message = Discord.Message.prototype) => {
	if (message.channel.type != 'DM' || message.author.bot) return;
	let embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`New Message: ${message.author.username}#${message.author.discriminator} - ${message.author.id}`).setDescription(message.content);
	const attachments = message.attachments.map(m => m.url);
	message.client.channels.cache.find(channel => channel.id == modMessaging).send({ embeds: [ embed ], files: attachments });
	try { message.react('✅'); } catch {}
}