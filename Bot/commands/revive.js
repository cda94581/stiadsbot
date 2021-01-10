module.exports = {
	name: 'revive',
	description: 'Revive the chat, maybe?',
	aliases: [ 'revive-chat' ],
	execute(message, args) {
		message.channel.send('no.');
	},
};