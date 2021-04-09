module.exports = message => {
	let valid = false;
	let data;
	let text = message.content;
	try {
		data = JSON.parse('{' + text + '}');
		valid = true;
	} catch {}
	try {
		data = JSON.parse('[' + text + ']');
		valid = true;
	} catch {}
	try {
		data = JSON.parse(text);
		valid = true;
	} catch {}
	if (valid && text.length > 60) {
		message.channel.send(`Hey, ${message.member.displayName}, I've formatted the JSON for you!\n\`\`\`json\n${JSON.stringify(data, null, '\t')}\`\`\``);
	}
}