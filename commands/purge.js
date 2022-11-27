import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';

export const command = {
	name: 'purge',
	description: '[MODERATION] Purge a specific number of messages',
	global: true,
	builder: new SlashCommandBuilder()
		.addIntegerOption((option) => option
			.setName('amount')
			.setDescription('The amount of messages to delete')
			.setMinValue(1)
			.setMaxValue(100)
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const amount = interaction.options.getInteger('amount');
		interaction.channel.bulkDelete(amount, true)
			.then(async () => await interaction.reply({ content: 'Purged messages', ephemeral: true }))
			.catch(async (error) => {
				console.error(error);
				await interaction.reply({ content: 'There was an error trying to purge messages in this channel!' })
			})
	}
}