const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'eval',
	description: 'Executes a JavaScript code, can be helpful for single-use things.',
	perms: [ 'ADMINISTRATOR' ],
	execute(message) {
		const content = message.content.slice(prefix.length + 5,);
		try {
			eval(content);
			message.channel.send(`Successfully executed code: ${content}`).then(sentMsg => {
				setTimeout(() => {
					sentMsg.delete();
				}, 5000);
			});
		} catch {
			message.channel.send(`There was an error executing code: ${content}`).then(sentMsg => {
				setTimeout(() => {
					sentMsg.delete();
				}, 5000);
			});
		}
		message.delete();
	},
};