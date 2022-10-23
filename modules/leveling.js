const Discord = require('discord.js');
const fs = require('fs-extra');
const path = require('path');
const xpCooldowns = new Set();
const { prefix, leveling } = require('../config.json');

module.exports = (message = Discord.Message.prototype) => {
	const author = message.author.id;
	if (Object.keys(leveling.blacklist.channels).includes(message.channel.id)
		|| Object.keys(leveling.blacklist.users).includes(author) || message.channel.type=='DM'
		|| message.content.startsWith(prefix) || message.author.bot ) return;
	if (xpCooldowns.has(author)) return;

	xpCooldowns.add(author);
	setTimeout(() => xpCooldowns.delete(author), 60000);

	const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);

	if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, `{"id":"${author}","level":0,"xp":0}`, 'utf-8');
	let text = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
	const addXp = Math.floor(Math.random() * 11) + 15;
	text.xp += addXp;
	text.messages++;
	const xpToLevel = 5 * (text.level ** 2) + 50 * text.level + 100;
	if (xpToLevel <= text.xp) {
		text.xp -= xpToLevel;
		text.level++;
		message.channel.send({ content: `Nice chatting, ${message.author}, you've advanced to level ${text.level}!` });
	}
	if (Object.keys(leveling.roles).includes(text.level)) message.member.roles.add(message.member.guild.roles.cache.get(level.roles[`${text.level}`]));
	fs.writeFileSync(filePath, JSON.stringify(text), 'utf-8');
}