#!/usr/bin/env node

import chalk from "chalk";
import getFile from "./index.js";
import validateURLs from "./http-validations.js";

const path = process.argv;

async function handleText(filePath) {
	const outcome = await getFile(filePath[2]);
	if (path[3] === "validate") {
		console.log(chalk.yellow("Validated links"), await validateURLs(outcome));
	} else {
		console.log(chalk.yellow("Links list"), outcome);
	}
}

handleText(path);
