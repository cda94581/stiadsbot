module.exports = {
	name: 'eval',
	description: 'Executes a JavaScript code, can be helpful for single-use things.',
	perms: [ 'ADMINISTRATOR' ],
	execute(message, args) {
		const content = message.content.slice(0, 5);
		eval(content);
	},
};