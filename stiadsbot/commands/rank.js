const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'rank',
	description: 'Get your level',
	type: 'leveling',
	execute(message, args) {
		const author = args[0] || message.author.id;
		const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);
		if (!fs.existsSync(filePath)) return message.channel.send('You aren\'t ranked yet, send some messages to gain XP.');
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) throw err;
			const info = JSON.parse(data);
			const toLevelUp = 5 * (info.level ** 2) + 50 * info.level + 100;
			message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setTitle(`STIADS:eyes: Bot Leveling - ${message.guild.members.cache.find(m => m.id == author).displayName}`).setDescription(`**Level**: ${info.level}\n**XP**: ${info.xp}/${toLevelUp}`));
		});
	},
};