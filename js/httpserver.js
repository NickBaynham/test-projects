/**
 * Created by nbaynham on 3/12/17.
 */

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello user of ' + req.headers['user-agent']);
}).listen(8008);

