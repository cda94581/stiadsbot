const Discord = require('discord.js');

module.exports = {
	name: 'purge',
	description: 'Purge a specific number of messages',
	aliases: [ 'prune' ],
	usage: '<amount>',
	perms: [ 'MANAGE_MESSAGES' ],
	args: true,
	type: 'moderation',
	execute(message = Discord.Message.prototype, args = []) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) return message.channel.send({ content: 'That doesn\'t seem to be a valid number.' });
		else if (amount <= 1 || amount > 100) return message.channel.send({ content: 'You need to input a number between 1 and 99.' });
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send({ content: 'There was an error trying to purge messages in this channel!' });
		});
	}
}