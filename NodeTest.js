// http = require('http');
// //var url = require('url');

// http.createServer(function (req, res) {
// 	console.log("Request: " + req.method + " to " + req.url);
// 	res.writeHead(200, "OK");
// 	res.write("<h1>Hello</h1>Node.js is working");
// 	res.end();
// }).listen(80);

// console.log("Ready on port 80");




var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');