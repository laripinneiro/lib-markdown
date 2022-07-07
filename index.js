import chalk from "chalk";
import * as fs from "fs";

function treatError(error) {
	throw new Error(chalk.red(error.code, "Invalid filepath"));
}

async function getFile(filepath) {
	const encoding = "utf-8";
	try {
		const text = await fs.promises.readFile(filepath, encoding);
		console.log(getLinks(text));
	} catch (error) {
		treatError(error);
	}
}

function getLinks(text) {
	const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
	const textLinks = [];
	let temp;

	while ((temp = regex.exec(text)) !== null) {
		textLinks.push({ [temp[1]]: temp[2] });
	}

	return textLinks;
}

getFile("assets/text1.md");
