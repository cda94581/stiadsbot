//WIP - UNSTABLE, DO NOT USE

// Require ytdl-core for YouTube
const ytdl = require('ytdl-core');

// Create the queue array here
var queue = [];

module.exports = {
	name: 'play',
	description: 'Play some music [ALPHA]',
	usage: '<Music>',
	args: true,
	execute(message, args) {
		if (message.member.voice.channel) { //if member who sent the channel is in vc
			queue.push(args[0]); // Add argument to the queue
			const voiceChannel = message.member.voice.channel;
			const connection = voiceChannel.join() // Join the vc
			while (queue.length > 0) { // While there are still things in the queue
				const stream = ytdl(queue[0], { filter: 'audioonly' }) // Set the video
				const dispatcher = connection.play(stream); // Play the music
				dispatcher.on('start', () => {
					message.channel.send('Now playing <' + queue[0] + '>'); // Send playing message
					queue.shift(); // Remove the first item in queue
				});
				dispatcher.on('error', console.error);
			}
			voiceChannel.leave();
		} else {
			message.channel.send('Please join a voice channel');
		}
	},
};