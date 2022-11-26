import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

export const command = {
	name: 'rank',
	description: '[LEVELING] Get your level',
	global: true,
	builder: new SlashCommandBuilder()
		.addUserOption((option) => option
			.setName('user')
			.setDescription('Optional user to get the rank of')
		),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const member = interaction.options.getMember('user') || interaction.member;
		const author = member.id;
		const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);
		if (!fs.existsSync(filePath)) return await interaction.reply({ content: 'You aren\'t ranked yet, send some messages to gain XP.' });
		const info = await import(filePath, { assert: { type: 'json' }});
		const toLevelUp = 5 * (info.level ** 2) + 50 * info.level + 100;
		await interaction.reply({ embeds: [{
			color: 16711680,
			title: `STIADS:eyes: Bot Leveling - ${member.displayName}`,
			description: `**Level**: ${info.level}\n**XP**: ${info.xp}/${toLevelUp}`
		}]});
	}
}