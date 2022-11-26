import { client } from '../index.js';
import config from '../config.json' assert { type: 'json' };
const { rules, welcome } = config;

client.on('guildMemberAdd', async member => await member.guild.channels.cache.get(welcome).send({ content: `Welcome ${member}, to ${member.guild.name}. Please be sure to read <#${rules}> before chatting with us, thanks! You are member #${member.guild.memberCount}!` }));