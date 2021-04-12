const Discord = require('discord.js');
const mysql = require('mysql');
const { levelinfo } = require('../config.json');

module.exports = {
	name: 'leaderboard',
	description: 'Server rank leaderboard',
	type: 'leveling',
	execute(message, args) {
		const con = mysql.createConnection({
			host: levelinfo.mysqlinfo.host,
			user: levelinfo.mysqlinfo.user,
			password: levelinfo.mysqlinfo.password,
			database: 'awesome_bot_leveling'
		});

		con.connect(err => {
			if (err) throw err;
			const sql = `SELECT * FROM awesome_xp ORDER BY level DESC, xp DESC`;
			con.query(sql, (err, rows) => {
				if (err) throw err;
				con.end();
				let data = '**PLACE. USER - LEVEL/XP**\n';
				for (let i in rows) {
					if (i < 20) data += `${i*1+1}. <@!${rows[i].id}> - ${rows[i].level}/${rows[i].xp}\n`;
				}
				message.channel.send(new Discord.MessageEmbed().setColor('#0077ff').setTitle('Awesome Bot Leaderboard').setDescription(data));
			});
		});
	},
};