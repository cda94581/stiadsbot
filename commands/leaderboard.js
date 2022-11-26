import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

export const command = {
	name: 'leaderboard',
	description: '[LEVELING] Server rank leaderboard',
	global: true,
	builder: new SlashCommandBuilder()
		.addIntegerOption((option) => option
			.setName('page')
			.setDescription('Optional page number of the leaderboard')
		),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const levelFiles = fs.readdirSync(path.resolve(__dirname, '../_data/leveling'), 'utf-8').filter(f => f.endsWith('.json'));
		let levelData = [];
		levelFiles.forEach(async file => levelData.push(await import(`../_data/leveling/${file}`, { assert: { type: 'json' }})));
		levelData.sort((a, b) => b.level - a.level || b.xp - a.xp);

		let data = ['**PLACE. USER - LEVEL/XP**\n'];
		levelData.forEach((member, i) => {
			let dataIndex = Math.floor(i / 20);
			if (!data[dataIndex]) data[dataIndex] = '**PLACE. USER - LEVEL/XP**\n';
			data[dataIndex] += `${i*1+1}. <@!${member.id}> - ${member.level}/${member.xp}\n`;
		});

		const page = interaction.options.getInteger('page');

		interaction.reply({ embeds: [{
			color: 16711680,
			title: 'STIADS:eyes: Bot Leaderboard',
			description: data[page ? page - 1 : 0],
			footer: { text: `Leaderboard Page ${page}/${data.length}` }
		}]});
	}
}