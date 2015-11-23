var http = require('http');

var accountBalance = require('./accountBalance.js');

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(accountBalance());
  response.end();
});

server.listen(3000);
