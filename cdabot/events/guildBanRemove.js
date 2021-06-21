const Discord = require('discord.js');
const { logchannel } = require('../config.json');
module.exports = (guild, user) => {
	const desc = `${user} - ${user.username}#${user.discriminator}\n**ID**: ${user.id}`;
	guild.client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Unbanned').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Unbanned: ${desc}`);
}