import chalk from "chalk";
import getFile from "./index.js";

const path = process.argv;

async function handleText(filePath) {
	const outcome = await getFile(filePath[2]);
	console.log(chalk.yellow("Lista de links "), outcome);
}

handleText(path);
