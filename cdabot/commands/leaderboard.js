const { embedcolors } = require('../config/config.json');
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'leaderboard',
	description: 'Get the server ranking leaderboard.',
	usage: '[Leaderboard Page]',
	execute(message, args) {
		const levelFiles = fs.readdirSync(path.resolve(__dirname, '../_data/leveling'), 'utf-8').filter(f => f.endsWith('.json'));
		let levelData = [];
		for (file of levelFiles) {
			const f = require(`../_data/leveling/${file}`);
			levelData.push(f);
		}
		levelData.sort((a, b) => b.level - a.level || b.xp - a.xp);

		let data = ['**PLACE. USER - LEVEL/XP - MESSAGES**\n'];
		for (i in levelData) {
			let dataIndex = Math.floor(i / 20);
			if (!data[dataIndex])data[dataIndex] = '**PLACE. USER - LEVEL/XP - MESSAGES**\n';
			data[dataIndex] += `${i*1+1}. <@!${levelData[i].id}> - ${levelData[i].level}/${levelData[i].xp} - ${levelData[i].messages}\n`;
		}
		
		if (args.length) return message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.command).setTitle('cdaBot Leaderboard').setDescription(data[args[0] - 1]).setFooter(`Leaderboard Page ${args[0]}/${data.length}`) ]});
		message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.command).setTitle('cdaBot Leaderboard').setDescription(data[0]).setFooter(`Leaderboard Page 1/${data.length}`) ]});
	}
}