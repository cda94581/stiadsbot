const fs = require('fs');
const path = require('path');
const { welcomeChannel } = require('../config.json');

module.exports = member => {
	console.log(`> ${Date().toString()}\t-\tMember Joined: ${member.user.username}#${member.user.discriminator}`);
	member.client.channels.cache.get(welcomeChannel).send(`Hey, ${member}, welcome to **${member.guild.name}**! You are member #${member.guild.memberCount}. Enjoy your time here!`);
}