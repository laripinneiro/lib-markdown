import chalk from "chalk";
import * as fs from "fs";

function treatError(error) {
	throw new Error(chalk.red(error.code, "Invalid filepath"));
}

async function getFile(filepath) {
	const encoding = "utf-8";
	try {
		const text = await fs.promises.readFile(filepath, encoding);
		console.log(chalk.green(text));
	} catch (error) {
		treatError(error);
	}
}

getFile("assets/text1.md");
