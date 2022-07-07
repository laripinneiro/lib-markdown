import getFile from "../index";

const arrayResult = [
	{
		FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
	},
];

describe("getFile::", () => {
	it("should be a function", () => {
		expect(typeof getFile).toBe("function");
	});

	it("should return an array with results", async () => {
		const result = await getFile("D:/larip/Documents/education/alura/formacao-javascript/curso06/test/assets/text1.md");
		expect(result).toEqual(arrayResult);
	});

	it("shoul return 'No links' message", async () => {
		const result = await getFile("D:/larip/Documents/education/alura/formacao-javascript/curso06/test/assets/text2.md");
		expect(result).toBe("No links");
	});
});
