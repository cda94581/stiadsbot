import { ChatInputCommandInteraction } from 'discord.js';

export const command = {
	name: 'data',
	description: '[FUN] Don\'t ask to ask, just ask!',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: 'Don\'t ask to ask, just ask',
		url: 'https://dontasktoask.com',
		thumbnail: { url: 'https://dontasktoask.com/favicon.png' }
	}]})
}