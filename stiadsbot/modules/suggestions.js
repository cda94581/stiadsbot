const { feedback_channel } = require('../config.json');

module.exports = async message => {
	if (message.author.bot || !message.content.toLowerCase().startsWith('suggestion')) return;
	if (message.channel.id == feedback_channel) {
		await message.react('⬆');
		await message.react('⬇');
		message.startThread({ name: message.content, autoArchiveDuration: 1440, reason: 'New Suggestion.' }).then(threadChannel => { threadChannel.join() });
	};
}