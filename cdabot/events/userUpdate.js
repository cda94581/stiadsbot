const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = (oldUser, newUser) => {
	const desc = `${oldUser}\nI'm lazy to do the other information rn so just check console logs for details.`;
	oldUser.client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle(`User Updated: ${oldUser.username}#${oldUser.discriminator}`).setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Updated: ${oldUser.username}#${oldUser.discriminator}:\nOld:\n${oldUser}\n\nNew:\n${newUser}`);
}