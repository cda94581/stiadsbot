const Discord = require('discord.js');
const fs = require('fs-extra');
const path = require('path');
const { welcomeChannel, embedcolors } = require('../config.json');
const bannedwords = require('../bannedwords.json');

module.exports = async member => {
	if (member.partial) {
		try {
			await member.fetch();
		} catch (error) {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');

	if (member.id != member.guild.ownerID) if (bannedwords.some(phrase => member.displayName.toLowerCase().includes(phrase))) member.setNickname( 'Name', 'Inappropriate Name' );

	const desc = `${member.user} - ${member.user.tag}\n**ID**: ${member.id}\n**Account Created**: ${member.user.createdAt}`;

	const filePath = path.resolve(__dirname, '../_data/member_history.json');
	if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, '[]', 'utf-8', err => { if (err) throw err; });
	fs.readFile(filePath, (err, data) => {
		if (err) throw err;
		let memberhistory = JSON.parse(data);
		if (memberhistory.includes(member.id)) {
			index.log(member, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Member Rejoined').setDescription(desc).setTimestamp(Date.now()));
			console.log(`> ${Date().toString()}\t-\tMember Rejoined: ${desc}`);
		
			member.client.channels.cache.get(welcomeChannel).send({ content: `Oh hey there, ${member}, welcome back to **${member.guild.name}**! You are now member #${member.guild.memberCount}.` });
		} else {
			index.log(member, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Member Joined').setDescription(desc).setTimestamp(Date.now()));
			console.log(`> ${Date().toString()}\t-\tMember Joined: ${desc}`);
		
			member.client.channels.cache.get(welcomeChannel).send({ content: `Hey, ${member}, welcome to **${member.guild.name}**! You are member #${member.guild.memberCount}. Enjoy your time here!` });

			memberhistory.push(member.id);
			fs.writeFile(path.resolve(__dirname, '../_data/member_history.json'), JSON.stringify(memberhistory, null, '\t'), err => {
				if (err) throw err;
			});
		}
	});
}