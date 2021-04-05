const Discord = require('discord.js');
const mysql = require('mysql');
const xpCooldowns = new Set();
const { levels, roles, prefix, levelblacklist, mysqlinfo } = require('../config.json');

module.exports = message => {
	if (message.author.bot || levelblacklist.includes(message.channel.id)) return; // Bots can't level up, filter out blacklisted channels
	if (message.content.startsWith(prefix)) return; // Don't let commands give xp
	const author = message.author.id;

	if (xpCooldowns.has(author)) return;

	xpCooldowns.add(author); // Adds the user to the set so that they can't earn xp for a minute
	setTimeout(() => {
		xpCooldowns.delete(author); // Removes the user from the set after a minute
	}, 60000);

	// Initialize variables
	var sql;
	var xp;
	var level;

	var con = mysql.createConnection({ // Create a connection to the database
		host: mysqlinfo.host, // Host of the database
		user: mysqlinfo.user, // Username for the database
		password: mysqlinfo.password // Password for the database
	});

	con.connect(err => { // Connect to the database
		if (err) throw err; // If there's an error
		sql = 'CREATE DATABASE IF NOT EXISTS awesome_bot_leveling'; // Create a database called awesome_bot_leveling if it doesn't already exist
		con.query(sql, err => { // Run the above ^
			if (err) throw err;

			sql = 'USE awesome_bot_leveling'; // Switch to this database
			con.query(sql, err => {
				if (err) throw err;
				sql = 'CREATE TABLE IF NOT EXISTS awesome_xp (id VARCHAR(255), xp VARCHAR(255), level VARCHAR(255))' // Creates a table in the database called awesome_xp if it doesn't already exist with 3 columns: id, xp, level
				con.query(sql, err => {
					if (err) throw err;
					sql = `SELECT * FROM awesome_xp WHERE id = ${author}`; // Selects all rows in the table with an id of the message author (should only be 1 row)
					con.query(sql, (err, rows) => {
						if (err) throw err;
						if (!rows.length) { // If it doesn't return any results
							sql = `INSERT INTO awesome_xp (id, xp, level) VALUES (${author}, 0, 0)` // Insert a row with the id of the message author, and xp and level as 0
							con.query(sql, err => {
								if (err) throw err;
							});
						}
						var addXp = Math.floor(Math.random() * 11) + 15; // Chooses a number between 0 and 10, and add 15 to it to become 15-25

						sql = `UPDATE awesome_xp SET xp = xp + ${addXp} WHERE id = ${author}`; // Update user xp to add 15-25
						con.query(sql, (err, rows) => {
							if (err) throw err;
							sql = `SELECT * FROM awesome_xp WHERE id = ${author}`;
							con.query(sql, (err, rows) => {
								if (err) throw err;
								xp = rows[0].xp;
								level = rows[0].level;
								leveling();
							});
						});
					});
				});
			});
		});
	});

	function leveling() {
		let xpToLevel = 5 * (level ** 2) + 50 * level + 100;
		if (xpToLevel <= xp) {
			xp -= xpToLevel; // Decrease xp by that amount
			sql = `UPDATE awesome_xp SET xp = ${xp} WHERE id = ${author}`; // Update in database
			con.query(sql, err => {
				if (err) throw err;
				level++; // Increase level
				sql = `UPDATE awesome_xp SET level = ${level} WHERE id = ${author}`; // Increase in database
				con.query(sql, err => {
					if (err) throw err;
					message.channel.send(`GG ${message.author}, you just advanced to level ${level}!`);
					addRoles();
				});
			});
		} else {
			con.end();
		}
	}

	function addRoles() {
		if (levels.includes(level)) {
			roleToAdd = roles[levels.indexOf(level)];
			let role = message.member.guild.roles.cache.find(role => role.id === roleToAdd);
			message.member.roles.add(role);
		}
		con.end();
	}
}
