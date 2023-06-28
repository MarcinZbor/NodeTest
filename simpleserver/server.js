const http = require("http");

http
	.createServer(function (req, res) {
        console.log("object");
		res.writeHead(200, { "Content-type": "text/html" });

		res.end("Hello World!");
	})
	.listen(8080);
