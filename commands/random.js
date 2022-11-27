import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import random from './random.json' assert { type: 'json' };

export const command = {
	name: 'random',
	description: '[FUN] Handles Commands with Random Responses',
	global: true,
	builder: new SlashCommandBuilder()
		.addStringOption((option) => option
			.setName('command')
			.setDescription('Choose the random action option')
			.setChoices(...Object.keys(random).map(r => {return { name: r, value: r }}))
			.setRequired(true)
		),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const commandName = interaction.options.getString('command');
		const randomNum = Math.floor(Math.random() * random[commandName].length);
		let embed;

		if (['ball8'].includes(commandName)) embed = {
			color: 16711680,
			title: '',
			description: random[commandName][randomNum]
		}
		else if (['cat', 'dog'].includes(commandName)) embed = {
			color: 16711680,
			title: 'Lazy Title',
			image: { url: random[commandName][randomNum] }
		}
		else embed = {
			color: 16711680,
			title: 'Lazy Title',
			thumbnail: { url: random[commandName][randomNum] }
		}

		await interaction.reply({ embeds: [ embed ]});
	}
}