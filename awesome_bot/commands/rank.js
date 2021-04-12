const Discord = require('discord.js');
const mysql = require('mysql');
const { levelinfo } = require('../config.json');

module.exports = {
	name: 'rank',
	description: 'Get your level',
	type: 'leveling',
	execute(message, args) {
		let author = {};
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
			host: levelinfo.mysqlinfo.host,
			user: levelinfo.mysqlinfo.user,
			password: levelinfo.mysqlinfo.password,
			database: 'awesome_bot_leveling'
		});

		con.connect(err => {
			if (err) throw err;
			let sql = `SELECT * FROM awesome_xp WHERE id = ${author.id}`;
			con.query(sql, (err, rows) => {
				if (err) throw err;
				sql = `SELECT * FROM awesome_xp ORDER BY level DESC, xp DESC`;
				if (!rows.length) return message.channel.send('Please send some messages to gain xp!');
				const xp = rows[0].xp;
				const level = rows[0].level;
				const xpToLevel = 5 * (level ** 2) + 50 * level + 100;
				con.query(sql, (err, rows) => {
					if (err) throw err;
					con.end();
					const rank = rows.indexOf(rows.find(row => row.id == author.id)) + 1;
					const size = rows.length;
					const embed = new Discord.MessageEmbed().setColor('#0077ff').setTitle(author.name).setDescription(`Level: ${level}\nXP: ${xp}/${xpToLevel}\nRank: ${rank}/${size}`);
					message.channel.send(embed);
				});
			});
		});
	},
};