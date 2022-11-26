import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'

export const command = {
	name: 'modmessage',
	description: '[MODERATION] Mods may use this to privately DM you asking for [additional] information',
	global: true,
	builder: new SlashCommandBuilder()
		.addUserOption((option) => option
			.setName('user')
			.setDescription('The user to send the message to')
			.setRequired(true)
		)
		.addStringOption((option) => option
			.setName('message')
			.setDescription('The message to send')
			.setMaxLength(1500)
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers + PermissionFlagsBits.KickMembers),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		try {
			await interaction.options.getUser('user').send({ embeds: [{
				color: 16711680,
				title: 'Incoming Mod Message',
				description: interaction.options.getString('message')
			}]});
			await interaction.reply('✅ Sent!');
		} catch { await interaction.reply('❌ Failed to send'); }
	}
}