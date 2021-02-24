const { feedback_channel } = require('../config.json');

module.exports = message => {
	if (message.author.bot) return;
	if (message.channel.id == feedback_channel) {
		message.react('⬆');
		message.react('⬇');
	};
}