module.exports = {
	name: 'eval',
	description: 'Executes a JavaScript code, can be helpful for single-use things.',
	perms: [ 'ADMINISTRATOR' ],
	execute(message, args, client) {
		const content = message.content.slice(6,);
		try {
			eval(content);
			message.channel.send(`Successfully execute code: ${content}`);
		} catch {
			message.channel.send(`There was an error executing code: ${content}`);
		}
	},
};