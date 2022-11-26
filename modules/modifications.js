import { client } from '../index.js';
import { ChannelType } from 'discord.js';
import path from 'path';
import { URL } from 'url';
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

client.on('messageCreate', async message => {
	const { misc } = await import(path.resolve(__dirname, '../config.json'), { assert: { type: 'json' }});
	const { modifications } = misc;
	if (message.channel.type != ChannelType.DM || message.author.bot || !message.content.toLowerCase().startsWith('modification submission')) return;
	if (!modifications.open) return await message.channel.send({ content: 'Sorry, Modification submissions are closed at this time' });
	const attachments = message.attachments.map(m => m.url);
	await client.channels.cache.get(modifications.channel).send({ embeds: [{ color: 16711680, title: `Modification Submission - ${message.author.tag}`, description: message.content }], files: attachments }).then(async sentMsg => await sentMsg.react('👍'));
	try { await message.react('✅'); } catch {}
});