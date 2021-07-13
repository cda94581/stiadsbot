const Discord = require('discord.js');
const { welcomeChannel } = require('../config.json');

module.exports = member => {
	const index = require('./index');

	const desc = `${member.user} - ${member.user.username}#${member.user.discriminator}\n**ID**: ${member.user.id}`;

	index.log(member, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Joined').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Joined: ${desc}`);

	member.client.channels.cache.get(welcomeChannel).send(`Hey, ${member}, welcome to **${member.guild.name}**! You are member #${member.guild.memberCount}. Enjoy your time here!`);
}