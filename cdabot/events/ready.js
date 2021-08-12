const { presence } = require('../config.json');

module.exports = client => {
	console.log(`> ${Date().toString()}\t-\tReady!`); // Tells the console
	repeat();
	function repeat() {
		client.user.setPresence({ activities: [{ name: presence.name, type: presence.type }], status: presence.status});
		setTimeout(() => {
			repeat();
		}, 3600000);
	}
}