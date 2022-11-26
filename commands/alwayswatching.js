import { ChatInputCommandInteraction } from 'discord.js';

export const command = {
	name: 'alwayswatching',
	description: '[FUN] I\'m watching you, always',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ content: 'https://tenor.com/view/mike-wazowski-watching-im-you-gif-5352035' })
}