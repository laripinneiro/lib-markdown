import chalk from "chalk";
import getFile from "./index.js";
import validateURLs from "./http-validations.js";

const path = process.argv;

async function handleText(filePath) {
	const outcome = await getFile(filePath[2]);
	if (path[3] === "validar") {
		console.log(chalk.yellow("Links validados"), validateURLs(outcome));
	} else {
		console.log(chalk.yellow("Lista de links "), outcome);
	}
}

handleText(path);
