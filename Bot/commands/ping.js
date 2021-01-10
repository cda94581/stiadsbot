module.exports = {
	name: 'ping',
	description: 'Pings to bot to see if it\'s still alive',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};