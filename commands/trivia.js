import { ChatInputCommandInteraction } from 'discord.js';
import he from 'he';
import https from 'https';
const removeCategories = [ 24 ];
let category;

export const command = {
	name: 'trivia',
	description: '[FUN] Play a trivia game',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => {
		do category = Math.floor(Math.random() * 23) + 9;
		while (removeCategories.some(x => category == x));
		const data = await command.httpsAsync(`https://opentdb.com/api.php?amount=1&category=${category}`);
		const info = JSON.parse(data);
		if (info.response_code != 0) return await interaction.reply({ content: 'There was an issue fetching a trivia. Please try again later.' });

		const result = info.results[0];
		const { incorrect_answers } = result;
		const correct_answer = he.decode(result.correct_answer);
		const difficulty = `${result.difficulty.charAt(0).toUpperCase()}${result.difficulty.slice(1)}`;

		let options = [];
		options[Math.floor(Math.random() * (incorrect_answers.length + 1))] = correct_answer;
		for (let answer of incorrect_answers) {
			let random;
			do random = Math.floor(Math.random() * (incorrect_answers.length + 1));
			while (options[random]);
			options[random] = he.decode(answer);
		};
		let optionStr = [];
		for (let option in options) optionStr[option] = `**${parseInt(option) + 1}.** ${options[option]}`;
		optionStr = optionStr.join('\n');
		const description = `**${he.decode(result.question)}**\n\n${optionStr}\n\nDifficulty: \`${difficulty}\`\nCategory: \`${result.category}\``;
		await interaction.reply({ embeds: [{
			color: 7506394,
			title: 'Trivia!',
			description
		}]});
		const filter = res => { return interaction.user.id == res.author.id };
		const res = await interaction.channel.awaitMessages({ filter, max: 1, time: 60000, errors: [ 'time' ] });
		if (options[res.first().content - 1] == correct_answer) return await interaction.channel.send({ content: 'Correct!' });
		return await interaction.channel.send({ content: `Incorrect. The correct answer was **${options.indexOf(correct_answer) + 1}** (${correct_answer}).` });
	},
	httpsAsync: async (url) => {
		return new Promise((resolve, reject) => {
			https.get(url, res => {
				res.on('data', resolve);
			}).on('error', reject);
		});
	}
}