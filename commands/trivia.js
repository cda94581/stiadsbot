const he = require('he');
const https = require('https');
const Discord = require('discord.js');
const removeCategories = [ 24 ];

module.exports = {
	name: 'trivia',
	description: 'Play a trivia game',
	type: 'fun',
	execute(message = Discord.Message.prototype) {
		let category = Math.floor(Math.random() * 23) + 9;
		while (removeCategories.some(x => category == x)) category = Math.floor(Math.random() * 23) + 9;
		https.get(`https://opentdb.com/api.php?amount=1&category=${category}`, res => {
			res.on('data', data => {
				const info = JSON.parse(data);
				if (info.response_code != 0) return message.channel.send({ content: 'There was an issue fetching a trivia. Please try again later.' });

				const result = info.results[0];
				const incorrect_answers = result.incorrect_answers;
				const correct_answer = he.decode(result.correct_answer);
				const difficulty = `${result.difficulty.charAt(0).toUpperCase()}${result.difficulty.slice(1)}`;

				let options = [];
				options[Math.floor(Math.random() * (incorrect_answers.length + 1))] = correct_answer;
				for (let answer of incorrect_answers) {
					let random = Math.floor(Math.random() * (incorrect_answers.length + 1));
					while (options[random]) random = Math.floor(Math.random() * (incorrect_answers.length + 1));
					options[random] = he.decode(answer);
				};
				let optionStr = [];
				for (let option in options) optionStr[option] = `**${parseInt(option) + 1}.** ${options[option]}`;
				optionStr = optionStr.join('\n');
				const desc = `**${he.decode(result.question)}**\n\n${optionStr}\n\nDifficulty: \`${difficulty}\`\nCategory: \`${result.category}\``;
				message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('BLURPLE').setTitle('Trivia!').setDescription(desc) ]}).then(() => {
					const filter = res => { return message.author.id == res.author.id };
					message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: [ 'time' ] }).then(res => {
						if (options[res.first().content - 1] == correct_answer) return message.channel.send('Correct!');
						return message.channel.send(`Incorrect. The correct answer was **${options.indexOf(correct_answer) + 1}** (${correct_answer}).`);
					}).catch(() => {});
				});
			});
		}).on('error', err => { throw err; });
	}
}