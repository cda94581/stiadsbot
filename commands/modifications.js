import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

export const command = {
	name: 'modifications',
	description: '[FUN] Sets modifications to be open or closed',
	global: true,
	builder: new SlashCommandBuilder()
		.addStringOption((option) => option
			.setName('action')
			.setDescription('Whether or not to open or close the modifications')
			.setChoices({ name: 'Open', value: 'open' }, { name: 'Close', value: 'close' })
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		const filePath = path.resolve(__dirname, '../config.json');
		let file = (await import(filePath, { assert: { type: 'json' }})).default;
		switch (interaction.options.getString('action')) {
			case 'open':
				file.misc.modifications.open = true;
				await message.client.channels.cache.get(file.misc.modifications.channel).send({ content: `Modification Submissions are now OPEN! DM ${interaction.client.user} and start your message with **Modification Submission** to submit your modification.\nVoting is also OPEN! React with :+1: to vote for a modification.` });
				break;
			case 'close':
				file.misc.modifications.open = false;
				await message.client.channels.cache.get(file.misc.modifications.channel).send({ content: `Modification Submissions & Voting is now CLOSED! A winner will be announced soon.` });
				break;
		}
		fs.writeFileSync(filePath, JSON.stringify(file, null, '\t'), 'utf-8');
	}
}