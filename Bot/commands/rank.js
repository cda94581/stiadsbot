const Discord = require('discord.js');
const mysql = require('mysql');

module.exports = {
	name: 'rank',
	description: 'Get your level',
	execute(message, args) {
		const author = message.author.id;

		const con = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'stiadsbot_leveling'
		});

		con.connect(err => {
			if (err) throw err;
			const sql = `SELECT * FROM stiads_xp WHERE id = ${author}`;
			con.query(sql, (err, rows) => {
				if (err) throw err;
				con.end();
				if (!rows.length) return message.channel.send('Please send some messages to gain xp!');
				const xp = rows[0].xp;
				const level = rows[0].level;
				const xpToLevel = 5 * (level ** 2) + 50 * level + 100;
				const embed = new Discord.MessageEmbed().setColor('#0077ff').setTitle(message.author.username).setDescription(`Level: ${level}\nXP: ${xp}/${xpToLevel}`);
				message.channel.send(embed);
			});
		});
	},
};
