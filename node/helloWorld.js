/**
 * Created by nbaynham on 3/12/17.
 */

var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plan'});
    response.end('Hello World\n');
}).listen(8124);