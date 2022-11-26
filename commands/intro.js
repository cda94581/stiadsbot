import { ChatInputCommandInteraction } from 'discord.js'

export const command = {
	name: 'intro',
	description: '[INFO] Introduction to the bot',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: 'STIADS:eyes: Bot',
		description: `Hello, this is the STIADS:eyes: Bot!\nIt now uses exclusively slash commands for its functionality\n\n> **What is STIADS:eyes: Bot?**\nSTIADS:eyes: Bot is a bot created by **cda94581#2410** for fun when he was bored, to have some commands for fun and moderation.\n\n*Insert something here*`
	}]})
}