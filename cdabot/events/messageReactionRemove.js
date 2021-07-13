const reactionroles = require('../reactionroles.json');

module.exports = async (messageReaction, user) => {
	if (messageReaction.partial) {
		try {
			await messageReaction.fetch();
		} catch {
			return console.error('Something went wrong: ', error);
		}
	}
	for (i in reactionroles) {
		if ((messageReaction.message.channel.id == reactionroles[i].channel) && (messageReaction.message.id == reactionroles[i].message) && (( messageReaction.emoji.id || messageReaction.emoji.name ) == reactionroles[i].emoji)) {
			const role = messageReaction.message.member.guild.roles.cache.find(role => role.id == reactionroles[i].role);
			const member = messageReaction.message.member.guild.members.cache.find(member => member.id == user.id);
			return member.roles.remove(role);
		}
	}
}