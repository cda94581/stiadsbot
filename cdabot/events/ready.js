const fs = require('fs');
const path = require('path');
const { presence } = require('../config.json');

module.exports = client => {
	console.log(`> ${Date().toString()}\t-\tReady!`); // Tells the console
	repeat();
	function repeat() {
		client.user.setPresence({ activity: { name: presence.name, type: presence.type }, status: presence.status});
		setTimeout(() => {
			repeat();
		}, 86400000);
	}
}