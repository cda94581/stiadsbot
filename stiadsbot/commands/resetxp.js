const Discord = require('discord.js');
const mysql = require('mysql');
const { levelinfo } = require('../config.json');

module.exports = {
	name: 'resetxp',
	description: 'Resets the XP for a user, you will currently have to manually reset the roles',
	type: 'leveling',
	args: true,
	perms: [ 'ADMINISTRATOR' ],
	usage: '<USER>',
	execute(message, args, client) {
		message.channel.send({ content: 'WIP' });
		// const con = mysql.createConnection({
		// 	host: levelinfo.mysqlinfo.host,
		// 	user: levelinfo.mysqlinfo.user,
		// 	password: levelinfo.mysqlinfo.password,
		// 	database: 'stiadsbot_leveling'
		// });
		// let user = client.users.cache.get(args[0]);
		// if (!user) return message.channel.send(`There was an error trying to find a user with ID ${args[0]}`);

		// con.connect(err => {
		// 	if (err) throw err;
		// 	let sql = `UPDATE stiads_xp SET xp = 0, level = 0 WHERE id = ${user.id}`;
		// 	con.query(sql, (err, rows) => {
		// 		if (err) throw err;
		// 		message.channel.send(`Successfully reset **${user.username}**'s levels & xp`);
		// 		con.end();
		// 	});
		// });
	},
};