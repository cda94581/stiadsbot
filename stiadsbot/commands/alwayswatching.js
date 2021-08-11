module.exports = {
	name: 'alwayswatching',
	description: 'I\'m watching you, always',
	type: 'fun',
	execute(message, args) {
		message.delete();
		message.channel.send({ content: 'https://tenor.com/view/mike-wazowski-watching-im-you-gif-5352035' });
	},
};