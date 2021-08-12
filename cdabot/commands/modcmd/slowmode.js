module.exports = {
	name: 'slowmode',
	description: 'Sets a slowmode in a channel.',
	usage: '<TIME (in seconds)>',
	perms: [ 'MANAGE_CHANNELS' ],
	execute(message, args) {
		message.channel.setRateLimitPerUser(args[0]);
		message.channel.send({ content: `Slowmode set to ${args[0]} seconds.` });
		console.log(`> ${Date().toString()}\t-\tSlowmode of ${args[0]} seconds set for #${message.channel.name}`);
	}
}