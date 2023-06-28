let http = require("http");
let url = require("url");
let fs = require("fs");

http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-type": "text/html" });

		const pathname = url.parse(req.url, true).pathname;
		const filename = "./static" + pathname;

		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-type": "text/html" });
				return res.end("404 filed not found");
			}

			res.write(data);
			res.end();
		});
	})
	.listen(8080);
