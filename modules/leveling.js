import { client } from '../index.js';
import { ChannelType } from 'discord.js';
import fs from 'fs-extra';
import path from 'path';
import { URL } from 'url';
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);
import config from '../config.json' assert { type: 'json' };
const { leveling } = config;
const xpCooldowns = new Set();

client.on('messageCreate', async message => {
	const author = message.author.id;
	if (Object.keys(leveling.blacklist.channels).includes(message.channelId)
		|| Object.keys(leveling.blacklist.users).includes(author) || message.channel.type==ChannelType.DM
		|| message.author.bot ) return;
	if (xpCooldowns.has(author)) return;

	xpCooldowns.add(author);
	setTimeout(() => xpCooldowns.delete(author), 60000);

	const filePath = path.resolve(__dirname, `../_data/leveling/${author}.json`);

	if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, `{"id":"${author}","level":0,"xp":0}`, 'utf-8');
	let text = await import(filePath, { assert: { type: 'json' }});
	const addXp = Math.floor(Math.random() * 11) + 15;
	text.xp += addXp;
	text.messages++;
	const xpToLevel = 5 * (text.level ** 2) + 50 * text.level + 100;
	if (xpToLevel <= text.xp) {
		text.xp -= xpToLevel;
		text.level++;
		await message.channel.send({ content: `Nice chatting, ${message.author}, you've advanced to level ${text.level}!` });
	}
	if (Object.keys(leveling.roles).includes(text.level)) await message.member.roles.add(message.member.guild.roles.cache.get(level.roles[`${text.level}`]));
	fs.writeFileSync(filePath, JSON.stringify(text), 'utf-8');
});