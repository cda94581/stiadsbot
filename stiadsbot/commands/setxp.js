const Discord = require('discord.js');
const { levelinfo } = require('../config.json');

module.exports = {
	name: 'setxp',
	description: 'Sets the XP for a user, you will currently have to manually set the roles',
	type: 'leveling',
	args: true,
	perms: [ 'ADMINISTRATOR' ],
	usage: '<USER> <LEVEL> <XP>',
	execute(message, args, client) {
		message.channel.send({ content: 'WIP' });
		// const con = mysql.createConnection({
		// 	host: levelinfo.mysqlinfo.host,
		// 	user: levelinfo.mysqlinfo.user,
		// 	password: levelinfo.mysqlinfo.password,
		// 	database: 'stiadsbot_leveling'
		// });
		// if (args.length < 3) return message.channel.send(`Please specify a user ID, Level, and XP`);
		// let user = client.users.cache.get(args[0]);
		// if (!user) return message.channel.send(`There was an error trying to find a user with ID ${args[0]}`);

		// con.connect(err => {
		// 	if (err) throw err;
		// 	let sql = `UPDATE stiads_xp SET xp = ${args[2]}, level = ${args[1]} WHERE id = ${user.id}`;
		// 	con.query(sql, (err, rows) => {
		// 		if (err) throw err;
		// 		message.channel.send(`**${user.username}**'s level is now ${args[1]} and xp is now ${args[2]}`);
		// 		con.end();
		// 	});
		// });
	},
};