import { ChatInputCommandInteraction } from 'discord.js';

export const command = {
	name: 'moon',
	description: '[FUN] A mysterious moon 🕵️',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: 'The Mysterious Moon :spy:',
		description: 'A moon with a face. Who knows where they came from? All I know is that they, with their `hack-giveaway bot 9000`, has won the most out of anyone, with 5 wins, 3 of them all in a row.\nDangerous: Do not mess with them.',
		thumbnail: { url: 'https://cdn.discordapp.com/avatars/702558687910166608/80986d82498dac8a59523056975fca25.png' }
	}]})
}