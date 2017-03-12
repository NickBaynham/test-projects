/**
 * Created by nbaynham on 3/12/17.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var name = require('url').parse(req.url, true).query.name;
    if (name === undefined) {
        name = 'world';
    }
    if (name === 'Scott') {
        var file = 'scott.png';
        fs.stat(file, function(err, stat){
            if (err) {
                console.log(err);
                res.writeHead(200, {'Content-Type':'text/plain'});
                res.end("Sorry, Scott isn't around right now \n");
            } else {
                var img = fs.readFileSync(file);
                res.contentType = 'image/png';
                res.contentLength = stat.size;
                res.end(img, 'binary');
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello ' + name + '\n');
    }
}).listen(8124);
console.log('Server running on port 8124');