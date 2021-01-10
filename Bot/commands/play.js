//WIP

// Require ytdl-core for YouTube Music
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play some music [ALPHA]',
	usage: '<Music>',
	args: true,
	execute(message, args) {
		if (message.member.voice.channel) {
			const voiceChannel = message.member.voice.channel;
			voiceChannel.join().then(connection => {
				const stream = ytdl(args[0], { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				message.channel.send('Now playing <' + args[0] + '>');
				dispatcher.on('finish', () => voiceChannel.leave());
			})
		} else {
			message.channel.send('Please join a voice channel');
		}
	},
};