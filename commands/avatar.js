import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export const command = {
	name: 'avatar',
	description: '[FUN] Get yours or another user\'s avatar',
	global: true,
	builder: new SlashCommandBuilder()
		.addUserOption((option) => option
			.setName('member')
			.setDescription('Optional user to mention for an avatar')
		),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => interaction.reply({ content: `Avatar: ${interaction.options.getMember('member')?.displayAvatarURL({ format: 'png', dynamic: true }) || interaction.member.displayAvatarURL({ format: 'png', dynamic: true })}` })
}