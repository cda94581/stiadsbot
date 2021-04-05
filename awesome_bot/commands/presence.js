module.exports = {
	name: 'presence',
	description: 'Sets the bot\'s presence',
	perms: [ 'ADMINISTRATOR' ],
	execute(message, args) {
		switch (args[0].toLowerCase()) {	
			case 'dnd': message.client.user.setStatus('dnd').then(message.channel.send('Success!')); break;
			case 'idle': message.client.user.setStatus('idle').then(message.channel.send('Success!')); break;
			case 'invisible': message.client.user.setStatus('invisible').then(message.channel.send('Success!')); break;
			case 'online': message.client.user.setStatus('online').then(message.channel.send('Success!')); break;
			default: return message.channel.send('Please enter a valid presence (`dnd`, `idle`, `invisible`, `online`');
		}
	},
};