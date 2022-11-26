import { client } from '../index.js';
import config from '../config.json' assert { type: 'json' };
const { reactions } = config;

client.on('messageReactionAdd', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try { await messageReaction.fetch(); }
		catch { return console.error('Something went wrong: ', error); }
	}
	reactions.forEach(reactionGroup => {
		if (reactionGroup.channel!=messageReaction.message.channelId || reactionGroup.message!=messageReaction.message.id) return;
		Object.keys(reactionGroup.roles).forEach((role, index, array) => {
			if (role != messageReaction.emoji.id && role != messageReaction.emoji.name) return;
			messageReaction.message.guild.members.cache.get(user.id).roles.add(messageReaction.message.guild.roles.cache.get(reactionGroup.roles[role]));

			array.filter(item => reactionGroup.keep ? true : item != role).forEach(remove => {
				const reaction = messageReaction.message.reactions.cache.get(remove);
				if (!reaction) return;
				reaction.users.remove(user);
			});
		});
	});
});

client.on('messageReactionRemove', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try { await messageReaction.fetch(); }
		catch (error) { return console.error('Something went wrong: ', error); }
	}
	reactions.forEach(reactionGroup => {
		if ( reactionGroup.channel!=messageReaction.message.channelId || reactionGroup.message!=messageReaction.message.id || reactionGroup.keep ) return;
		Object.keys(reactionGroup.roles).forEach(role => {
			if (role!=messageReaction.emoji.id && role!=messageReaction.emoji.name) return;
			messageReaction.message.guild.members.cache.get(user.id).roles.remove(messageReaction.message.guild.roles.cache.get(reactionGroup.roles[role]));
		});
	});
});