const Discord = require('discord.js');
const mysql = require('mysql');

module.exports = {
	name: 'rank',
	description: 'Get your level',
	execute(message, args) {
		let author = {}
		if (message.mentions.users.first()) {
			author = {
				id: message.mentions.users.first().id,
				name: message.mentions.users.first().username
			}
		} else {
			author = {
				id: message.author.id,
				name: message.author.username
			}
		}


		const con = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'awesome_bot_leveling'
		});

		con.connect(err => {
			if (err) throw err;
			const sql = `SELECT * FROM awesome_xp WHERE id = ${author.id}`;
			con.query(sql, (err, rows) => {
				if (err) throw err;
				con.end();
				if (!rows.length) return message.channel.send('Please send some messages to gain xp!');
				const xp = rows[0].xp;
				const level = rows[0].level;
				const xpToLevel = 5 * (level ** 2) + 50 * level + 100;
				const embed = new Discord.MessageEmbed().setColor('#0077ff').setTitle(author.name).setDescription(`Level: ${level}\nXP: ${xp}/${xpToLevel}`);
				message.channel.send(embed);
			});
		});
	},
};
