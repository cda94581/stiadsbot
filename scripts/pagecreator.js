function writeNav(levels) {
	let pathBack = "";
	let levelCount = 1;
	while (levelCount < levels) {
		pathBack += "../";
		levelCount++;
	}
	document.write(`
		<a href="../${pathBack}">
			<img src="../${pathBack}assets/favicon.png" width=50vmin height=50vmin title="Discord Bots" alt="Discord Bots Icon">
		</a>
		<h1 class="no_deco_link topnav">
			<a href="${pathBack}wiki" title="wiki">Wiki</a>
		</h1>
	`);
}

function determineMode() {
	let element = document.getElementsByTagName('body')[0];
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		element.classList.add('darkmode');
	} else {
		element.classList.remove('darkmode');
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		if (event.matches) {
			element.classList.add('darkmode');
		} else {
			element.classList.remove('darkmode');
		}
	});
}