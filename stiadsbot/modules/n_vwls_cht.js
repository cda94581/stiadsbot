const { n_vwls_cht_channel } = require('../config.json');

module.exports = async message => {
	if (message.author.bot || message.channel.id != n_vwls_cht_channel) return;

	if (message.content.toLowerCase().match(/[aeiou]/g)) {
		await message.reply({ content: 'n vwls smh' }).then(sentMessage => {
			setTimeout(() => {
				sentMessage.delete();
			}, 10000);
		});
		await message.delete();
	}
}
