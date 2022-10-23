const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'intro',
	description: 'Introduction to the bot',
	aliases: [ 'hi', 'start' ],
	type: 'info',
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed()
			.setColor('#ff0000').setTitle('STIADS:eyes: Bot')
			.setDescription(`Hello, this is the STIADS:eyes: Bot!\nTo get started, type \`${prefix}help\` to get a list of commands that you can use!\n\n> **What is STIADS:eyes: Bot?**\nSTIADS:eyes: Bot is a bot created by **cda94581#2410** for fun when he was bored, to have some commands for fun and moderation.\n\n*Insert something here*`);
		message.channel.send({ embeds: [ embed ]});
	}
}