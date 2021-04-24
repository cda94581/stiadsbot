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