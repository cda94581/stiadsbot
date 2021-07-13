const Discord = require('discord.js');
module.exports = (guild, user) => {
	const index = require('./index');

	const desc = `${user} - ${user.username}#${user.discriminator}\n**ID**: ${user.id}`;

	index.log(guild, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Unbanned').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Unbanned: ${desc}`);
}