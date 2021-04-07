function writeMeta(ogtitle, ogdescription, ogimage, ogurl, ogimagewidth, ogimageheight, description, keywords, author) {
	let meta = document.createElement('meta');
	meta.setAttribute('og:title', ogtitle);
	meta.setAttribute('og:description', ogdescription);
	meta.setAttribute('og:image', ogimage);
	meta.setAttribute('og:url', ogurl);
	meta.setAttribute('og:image:width', ogimagewidth);
	meta.setAttribute('og:image:height', ogimageheight);
	meta.setAttribute('description', description);
	meta.setAttribute('keywords', keywords);
	meta.setAttribute('author', author);
	document.getElementsByTagName('head')[0].appendChild(meta);
}