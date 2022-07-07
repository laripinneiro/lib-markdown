import fetch from "node-fetch";

function treatError(error) {
	throw new Error(error.message);
}

async function checkStatusCode(arrayURLs) {
	try {
		const linksStatusCode = await Promise.all(
			arrayURLs.map(async (url) => {
				const res = await fetch(url);
				return res.status;
			})
		);
		return linksStatusCode;
	} catch (error) {
		treatError(error);
	}
}

function generateLinksArray(arrayLinks) {
	return arrayLinks.map((linkObject) => Object.values(linkObject).join());
}

async function validateURLs(arrayLinks) {
	const links = generateLinksArray(arrayLinks);
	const linksStatusCode = await checkStatusCode(links);

	const results = arrayLinks.map((obj, index) => ({
		...obj,
		statusCode: linksStatusCode[index],
	}));

	return results;
}

export default validateURLs;
