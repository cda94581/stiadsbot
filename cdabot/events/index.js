const guildBanAdd = require('./guildBanAdd');
const guildBanRemove = require('./guildBanRemove');
const guildMemberAdd = require('./guildMemberAdd');
const guildMemberRemove = require('./guildMemberRemove');
const guildMemberUpdate = require('./guildMemberUpdate');
const messageCreate = require('./messageCreate');
const messageDelete = require('./messageDelete');
const messageDeleteBulk = require('./messageDeleteBulk');
const messageReactionAdd = require('./messageReactionAdd');
const messageReactionRemove = require('./messageReactionRemove');
const messageUpdate = require('./messageUpdate');
const ready = require('./ready');
const userUpdate = require('./userUpdate');

const { logchannel } = require('../config/config.json');

module.exports = {
	event(client) {
		client.on('guildBanAdd', ban => guildBanAdd(ban)); // A member is banned
		client.on('guildBanRemove', ban => guildBanRemove(ban)); // A member is unbanned
		client.on('guildMemberAdd', member => guildMemberAdd(member)); // Someone joins
		client.on('guildMemberRemove', member => guildMemberRemove(member)); // Someone leaves
		client.on('guildMemberUpdate', (oldMember, newMember) => guildMemberUpdate(oldMember, newMember)); // A member is updated
		client.on('messageCreate', message => messageCreate(message)); // Someone sends a message
		client.on('messageDelete', message => messageDelete(message)); // A message is deleted
		client.on('messageDeleteBulk', messages => messageDeleteBulk(messages)); // Bulk messages are deleted
		client.on('messageReactionAdd', (messageReaction, user) => messageReactionAdd(messageReaction, user)); // Someone reacts to a message
		client.on('messageReactionRemove', (messageReaction, user) => messageReactionRemove(messageReaction, user)); // Someone unreacts to a message
		client.on('messageUpdate', (oldMessage, newMessage) => messageUpdate(oldMessage, newMessage)); // A message is updated
		client.once('ready', () => ready(client)); // When ready, only runs once
		client.on('userUpdate', (oldUser, newUser) => userUpdate(oldUser, newUser)); // A user is updated
	},
	log(initiateClient, message, files) {
		initiateClient.client.channels.cache.get(logchannel).send({ embeds: [ message ], files: files });
	}
}