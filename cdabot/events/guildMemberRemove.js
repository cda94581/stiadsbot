const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = member => {
	const desc = `${member.user} - ${member.user.username}#${member.user.discriminator}\n**ID**: ${member.user.id}`;
	member.client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Left').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Left: ${desc}`);
}