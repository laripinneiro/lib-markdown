function generateLinksArray(arrayLinks) {
	return arrayLinks.map((linkObject) => Object.values(linkObject).join());
}

function validateURLs(arrayLinks) {
	return generateLinksArray(arrayLinks);
}

export default validateURLs;
