import { client } from '../index.js'
import config from '../config.json' assert { type: 'json' };
const { misc } = config; const { nVwls } = misc;

client.on('messageCreate', async message => {
	if (message.channelId != nVwls || message.author.bot) return;

	if (message.content.toLowerCase().match(/[aeiou]/g)) {
		const sentMsg = await message.reply({ content: 'n vwls smh' });
		await message.delete();
		setTimeout(sentMsg.delete, 10000);
	}
});