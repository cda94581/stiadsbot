const guildMemberAdd = require('./guildMemberAdd');
const ready = require('./ready');
const message = require('./message');

module.exports = client => {
	client.on('guildMemberAdd', member => guildMemberAdd(member)); // Someone joins
	client.on('message', msg => message(msg)); // Someone sends a message
	client.once('ready', () => ready(client)); // When ready, only runs once
}