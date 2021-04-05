module.exports = {
	name: 'ping',
	description: 'Pings to bot to see if it\'s still alive',
	type: 'info',
	execute(message, args) {
		var ping = Math.round(message.guild.shard.ping);
		message.channel.send(`Pong. \`${ping}ms\``);
	},
};