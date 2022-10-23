const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'modifications',
	description: 'Information about cda94581 modifications',
	type: 'fun',
	perms: [ 'ADMINISTRATOR' ],
	execute(message = Discord.Message.prototype, args = []) {
		const filePath = path.resolve(__dirname, '../config.json');
		let file = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		switch (args[0].toLowerCase()) {
			case 'open':
				file.misc.modifications.open = true;
				message.client.channels.cache.find(channel => channel.id == file.misc.modifications.channel)
					.send({ content: `Modification Submissions are now OPEN! DM ${message.client.user} and start your message with **Modification Submission** to submit your modification.\nVoting is also OPEN! React with :+1: to vote for a modification.` });
				break;
			case 'close':
				file.misc.modifications.open = false;
				message.client.channels.cache.find(channel => channel.id == file.misc.modifications.channel)
					.send({ content: `Modification Submissions & Voting is now CLOSED! A winner will be announced soon.` });
				break;
		}
		fs.writeFileSync(filePath, JSON.stringify(file, null, '\t'), 'utf-8');
	}
}