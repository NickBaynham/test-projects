/**
 * Created by nbaynham on 3/12/17.
 */

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var nameGetter = new EventEmitter();
nameGetter.getPaths = function(path, next){
    this._next = next;
    var self = this;
    fs.stat(path, function(err, stats){
        if (err) {
            console.log(err.message);
        } else if (!stats.isDirectory()){
            console.log('Not a Directory.');
        } else {
            fs.readdir(path, function(err, files){
                self._numFiles = files.length;
                self._eventCount = 0;
                files.forEach(function(f, i, fa){
                    fs.realPath(path + '/' + f, function(err, resolvedPath){
                        if (err) {
                            console.log(err.message);
                        } else {
                            console.log(resolvedPath);
                        }
                        self.emit('pathDone');
                    });
                });
            });
        }
    });
};

nameGetter.addListener('pathDone', function(){
    if (++this._eventCount == this._numFiles && this._next) {
        this.next();
    }
});