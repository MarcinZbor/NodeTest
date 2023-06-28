const http = require("http");

const server = http.createServer(async (req, res) => {
	console.log("request");

	res.writeHead(200);
	res.end("Hello World");
});

server.listen(8080);
