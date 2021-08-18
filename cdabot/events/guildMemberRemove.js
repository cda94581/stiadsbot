const { embedcolors } = require('../config/config.json');
const Discord = require('discord.js');

module.exports = async member => {
	if (member.partial) {
		try {
			await member.fetch();
		} catch (error) {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');

	const desc = `${member.user} - ${member.user.tag}\n**ID**: ${member.user.id}`;

	index.log(member, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Member Left').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Left: ${desc}`);
}