import { ChatInputCommandInteraction } from 'discord.js'

export const command = {
	name: 'movie',
	description: '[INFO] Information about a cda94581 movie',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: 'Movie',
		description: 'Apparently people were talking about a movie, so channels were created to discuss and write the script, respectively. Members with the <@&778114705759666197> role will be given access. For fun ofc :p\nCurrently looking for ideas for how I hand this role out, plus a potential color for this'
	}]})
}