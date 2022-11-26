import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
const numbers = [ '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟' ];

export const command = {
	name: 'poll',
	description: 'Start a poll',
	global: true,
	builder: new SlashCommandBuilder()
		.addStringOption((option) => option
			.setName('name')
			.setDescription('The name of the poll')
			.setMaxLength(200)
			.setRequired(true)
		)
		.addStringOption((option) => option
			.setName('options')
			.setDescription('Up to 10 options (separated by commas) to choose from')
			.setMaxLength(1500)
			.setRequired(true)
		),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		let pollOptions = '';
		let react = 0;
		const options = interaction.options.getString('options').split(/,/);

		for (const option in options) {
			pollOptions += `${option + 1}. ${options[option]}\n`;
			react++;
		}

		await interaction.reply({ embeds: [{
			color: 16711680,
			title: `Poll! (Beta) - ${interaction.options.getString('name')}`,
			descripition: `**Options:**\n${pollOptions}`
		}]})
		const sent = await interaction.fetchReply();
		for (let i = 0; i < react; i++) await sent.react(numbers[i]);
	}
}