const { embedcolors } = require('../config.json');
const Discord = require('discord.js');

module.exports = ban => {
	const index = require('./index');

	const desc = `${ban.user} - ${ban.user.tag}\n**ID**: ${ban.user.id}`;

	index.log(ban, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Member Banned').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Banned: ${desc}`);
}