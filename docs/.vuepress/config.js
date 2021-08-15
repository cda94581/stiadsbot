module.exports = {
	lang: 'en-US',
	title: 'Discord Bots by cda94581',
	description: 'A collection of Discord Bots, made by cda94581. The bots include a variety of features.',
	base: '/discord_bots/',
	
	themeConfig: {
		logo: '/images/logo.png',
		markdown: {
			lineNumbers: true
		},

		repo: 'cda94581/discord_bots',
		docsRepo: 'https://github.com/cda94581/discord_bots',
		docsBranch: 'gh-pages/source',
		docsDir: 'docs',
		editLink: true,
		lastUpdated: true,
		contributors: true,

		sidebar: {
			'/awesome_bot': [
				{
					text: 'Installation',
					link: '/awesome_bot/installation'
				},
				{
					text: 'config.json',
					link: '/awesome_bot/config.json'
				},
				{
					text: 'Contributing',
					link: '/awesome_bot/contributing'
				},
				{
					text: 'Commands',
					link: '/awesome_bot/commands'
				}
			],
			'/stiadsbot': [
				{
					text: 'Installation',
					link: '/stiadsbot/installation'
				},
				{
					text: 'config.json',
					link: '/stiadsbot/config.json'
				},
				{
					text: 'Contributing',
					link: '/stiadsbot/contributing'
				},
				{
					text: 'Commands',
					link: '/stiadsbot/commands'
				}
			]
		}
	}
}