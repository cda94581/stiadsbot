import { ChatInputCommandInteraction } from 'discord.js'

export const command = {
	name: 'server',
	description: '[INFO] Get information about the server',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: interaction.guild.name,
		description: `Total members: ${interaction.guild.memberCount}\nCreated on: ${interaction.guild.createdAt}\nCurrent owner: ${await interaction.guild.fetchOwner()}`
	}]})
}