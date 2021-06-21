module.exports = {
	name: 'purge',
	description: 'Purges a specific amount of messages',
	args: true,
	usage: '<AMOUNT>',
	perms: [ 'MANAGE_MESSAGES' ],
	execute (message, args) {
		message.delete();
		if (!parseInt(args[0])) return message.channel.send('I couldn\'t parse this number.');
		if (args[0] > 100) return message.channel.send('That number is too large.');
		message.channel.bulkDelete(args[0]);
	}
}