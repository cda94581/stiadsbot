const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'leaderboard',
	description: 'Server rank leaderboard',
	type: 'leveling',
	execute(message = Discord.Message.prototype, args = []) {
		const levelFiles = fs.readdirSync(path.resolve(__dirname, '../_data/leveling'), 'utf-8').filter(f => f.endsWith('.json'));
		let levelData = [];
		levelFiles.forEach(file => levelData.push(require(`../_data/leveling/${file}`)));
		levelData.sort((a, b) => b.level - a.level || b.xp - a.xp);

		let data = ['**PLACE. USER - LEVEL/XP**\n'];
		levelData.forEach((member, i) => {
			let dataIndex = Math.floor(i / 20);
			if (!data[dataIndex]) data[dataIndex] = '**PLACE. USER - LEVEL/XP**\n';
			data[dataIndex] += `${i*1+1}. <@!${member.id}> - ${member.level}/${member.xp}\n`;
		});

		message.channel.send({ embeds: [
			new Discord.MessageEmbed().setColor('#ff0000').setTitle('STIADS:eyes: Bot Leaderboard')
				.setDescription(data[args.length ? args[0] - 1 : 0])
				.setFooter({ text: `Leaderboard Page ${args[0]}/${data.length}` })
		]});
	}
}