module.exports = {
	name: 'ping',
	description: 'Pings to bot',
	execute(message, args, client) {
		var ping = Math.round(message.guild.shard.ping);
		message.channel.send(`Pong. \`${ping}ms\``);
	},
};