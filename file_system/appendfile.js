let fs = require("fs");

const filename = "./data/appendFile.txt";

fs.appendFile(filename, "Hello", function (err) {
	if (err) throw err;
	console.log("plik zapisany " + filename);
});
