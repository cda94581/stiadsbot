const Discord = require('discord.js');

module.exports = member => {
	const index = require('./index');

	const desc = `${member.user} - ${member.user.username}#${member.user.discriminator}\n**ID**: ${member.user.id}`;

	index.log(member, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Left').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Left: ${desc}`);
}