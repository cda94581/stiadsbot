import { client } from '../index.js';
import { ChannelType } from 'discord.js';
import config from '../config.json' assert { type: 'json' };
const { misc } = config; const { modMessaging } = misc;

client.on('messageCreate', async message => {
	if (message.channel.type != ChannelType.DM || message.author.bot) return;
	const attachments = message.attachments.map(m => m.url);
	await message.client.channels.cache.get(modMessaging).send({ embeds: [{ color: 16711680, title: `New Message: ${message.author.tag}`, description: message.content }], files: attachments });
	try { await message.react('✅'); } catch {}
});