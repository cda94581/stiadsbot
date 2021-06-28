const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = (oldMember, newMember) => {
	const desc = `${oldMember}\nI'm lazy to do the other information rn so just check console logs for details.`;
	oldMember.client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Member Updated: ${oldMember.user.username}#${oldMember.user.discriminator}`).setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Updated: ${oldMember.user.username}#${oldMember.user.discriminator}:\nOld:\n${oldMember}\n\nNew:\n${newMember}`);
}