const { n_vwls_cht_channel } = require('../config.json');

module.exports = message => {
	if (message.author.bot || message.channel.id != n_vwls_cht_channel) return;

	if (message.content.toLowerCase().match(/[aeiou]/g)) {
		message.delete();
		message.reply('n vwls smh').then(sentMessage => {
			setTimeout(() => {
				sentMessage.delete();
			}, 10000);
		});
	}
}
