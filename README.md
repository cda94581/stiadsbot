# stiadsbot
Version 2022.11.26-3

*So This Is A Discord Server Bot 👀* is a [*Discord*](https://discord.com) bot designed for [*So This Is A Discord Server*](https://discord.gg/byxaSZr). It features leveling, custom commands, mod messaging, welcome messages, suggestions, and a No Vowels Chat filter, with more to come!

A quick note- I've set all "stable" commands to have the "global" flag. This may not necessarily be the most secure practice if running for multiple servers and you'll have to modify this.

## Installing & Running
1. Download [Node.js](https://nodejs.org/) (v16 or higher) and NPM
2. Download the [`source code`](https://github.com/cda94581/stiadsbot/tags) from the tags
3. Unzip the file
4. Modify the [`config.json`](config.json) file to fit your needs
5. Open the folder in the Command Prompt or Terminal
6. Download the packages with `npm i`
7. Run with `node .` or `npm run start`
	- You may need to register slash commands with `npm run register`
	- Scripts are also available to delete the slash commands
	- All scripts: `start`, `dev`, `build`, `register`, `deleteServer`, `deleteGlobal`

Packages required:
- discord.js
- @discordjs/rest
- lodash
- fs-extra
- he
- xml2js
- archiver

## Contributing
Contributions are welcome, and they're fairly simple, however it is beyond the scope of a README file to explain in detail. In general however, look up information as needed:
- Fork the Repository
- Clone the Fork
- Make Changes & Commit
	- Write Proper Commit Messages!
- Create a Pull Request to merge with the main branch
	- Make it Detailed!