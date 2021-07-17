const Discord = require('discord.js');
const { welcomeChannel } = require('../config.json');
const bannedwords = require('../bannedwords.json');

module.exports = async member => {
	if (member.partial) {
		try {
			await member.fetch();
		} catch {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');

	if (member.id != member.guild.ownerID) {
		if (bannedwords.some(phrase => member.displayName.toLowerCase().includes(phrase))) member.setNickname( 'Name', 'Inappropriate Name' );
	}

	const desc = `${member.user} - ${member.user.username}#${member.user.discriminator}\n**ID**: ${member.user.id}\n**Account Created**: ${member.user.createdAt.UTC()}`;

	index.log(member, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Joined').setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Joined: ${desc}`);

	member.client.channels.cache.get(welcomeChannel).send(`Hey, ${member}, welcome to **${member.guild.name}**! You are member #${member.guild.memberCount}. Enjoy your time here!`);
}