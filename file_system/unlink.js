let fs = require("fs")

let filename = "./data/writeFile.txt"

fs.unlink(filename, function (err) {

    if (err) throw err;
    console.log("delete" + filename);
})