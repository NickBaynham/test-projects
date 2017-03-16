/**
 * Created by nbaynham on 3/16/17.
 */

var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
    console.log('request event');
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello Scott!\n');
});

server.on('connection', function(request, response){
    console.log('connection event');
});

server.listen(8124, function(){
    console.log('listening event')
});

console.log('Server running on port 8124');