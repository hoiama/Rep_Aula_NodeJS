var http = require('http');
var porta = 3000;
var ip = 'localhost';

var server = http.createServer((req, res) => {
	console.log('recebento request');
	res.writeHead(200, {'Content-Type' : 'text/html'});
	
	if(req.url == '/produtos'){
		res.end("<html><body> produtos  </body> </hmtl>");
	}
	if(req.url == '/'){
		res.end("<html><body> pricipal </body> </hmtl>");
	}
});

server.listen(porta, ip);

console.log('servidor rodando hoiama');