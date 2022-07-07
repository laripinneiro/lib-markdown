import fetch from "node-fetch";

async function checkStatusCode(arrayURLs) {
	const linksStatusCode = await Promise.all(
		arrayURLs.map(async (url) => {
			const res = await fetch(url);
			return res.status;
		})
	);

	return linksStatusCode;
}

function generateLinksArray(arrayLinks) {
	return arrayLinks.map((linkObject) => Object.values(linkObject).join());
}

async function validateURLs(arrayLinks) {
	const links = generateLinksArray(arrayLinks);
	const linksStatusCode = await checkStatusCode(links);

	return linksStatusCode;
}

export default validateURLs;
