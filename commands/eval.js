const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'eval',
	description: 'Executes a JavaScript code, can be helpful for single-use things.',
	perms: [ 'ADMINISTRATOR' ],
	execute(message = Discord.Message.prototype) {
		const command = message.content.slice(prefix.length + 5);
		try {
			eval(command);
			message.channel.send({ content: `> **Successfully executed code**\n\`\`\`js\n${command}\n\`\`\`` });
		} catch (error) {
			message.channel.send({ content: `> **There was an error executing code**\n\`\`\`js\n${command}\n\`\`\`\`\`\`${error}\`\`\`` });
		}
		message.delete();
	}
}