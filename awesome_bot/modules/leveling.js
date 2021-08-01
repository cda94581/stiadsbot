const xpCooldowns = new Set();
const { prefix, levelinfo } = require('../config.json');
const fs = require('fs-extra');
const path = require('path');

module.exports = message => {
	const author = message.author.id;
	if (levelinfo.blacklist.includes(message.channel.id) || message.channel.type == 'dm' || message.content.startsWith(prefix) || message.author.bot ) return;

	if (xpCooldowns.has(author)) return;

	xpCooldowns.add(author);
	setTimeout(() => {
		xpCooldowns.delete(author);
	}, 60000);

	const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);

	if (!fs.existsSync(filePath)) {
		fs.outputFileSync(filePath, `{"id":"${author}","level":0,"xp":0}`, 'utf-8', err => {
			if (err) throw err;
		});
	}
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if (err) throw err;
		let text = JSON.parse(data);
		const addXp = Math.floor(Math.random() * 11) + 15;
		text.xp += addXp;
		const xpToLevel = 5 * (text.level ** 2) + 50 * text.level + 100;
		if (xpToLevel <= text.xp) {
			text.xp -= xpToLevel;
			text.level++;
			message.channel.send(`Nice chatting, ${message.author}, you've advanced to level ${text.level}!`);
		}
		if (levelinfo.levels.includes(text.level)) {
			const roleToAdd = levelinfo.roles[levelinfo.levels.indexOf(text.level)];
			const role = message.member.guild.roles.cache.find(role => role.id === roleToAdd);
			message.member.roles.add(role);
		}
		fs.writeFile(filePath, JSON.stringify(text), 'utf-8', err => { if (err) throw err });
	});
}
