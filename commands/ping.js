import { ChatInputCommandInteraction } from 'discord.js';

export const command = {
	name: 'ping',
	description: '[INFO] Pings to bot to see if it\'s still alive',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const ping = Math.round(interaction.guild.shard.ping);
		await interaction.reply({ content: `Pong. \`${ping}ms\`` });
	}
}