const { responses } = require('./8ball.json');

module.exports = {
	name: '8ball',
	description: '8ball Q/A',
	args: true,
	execute(message, args) {
		message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
	},
};