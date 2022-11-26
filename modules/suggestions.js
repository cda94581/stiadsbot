import { client } from '../index.js';
import config from '../config.json' assert { type: 'json' };
const { misc } = config; const { feedback } = misc;

client.on('messageCreate', async message => {
	if (!message.content.toLowerCase().startsWith('suggestion') || message.author.bot) return;
	if (message.channelId == feedback) {
		await message.react('⬆');
		await message.react('⬇');
		const thread = await message.startThread({ name: message.content, autoArchiveDuration: 1440, reason: 'New Suggestion.' });
		await thread.join();
	}
});