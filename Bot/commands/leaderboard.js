const Discord = require('discord.js');
const mysql = require('mysql');

module.exports = {
	name: 'leaderboard',
	description: 'Server rank leaderboard',
	execute(message, args) {
		const con = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'stiadsbot_leveling'
		});

		con.connect(err => {
			if (err) throw err;
			const sql = `SELECT * FROM stiads_xp ORDER BY level DESC, xp DESC`;
			con.query(sql, (err, rows) => {
				if (err) throw err;
				con.end();
				let data = '**PLACE. USER - LEVEL/XP**\n';
				for (let i in rows) {
					if (i < 20) data += `${i*1+1}. <@!${rows[i].id}> - ${rows[i].level}/${rows[i].xp}\n`;
				}
				message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setTitle('STIADS:eyes: Bot Leaderboard').setDescription(data));
			});
		});
	},
};