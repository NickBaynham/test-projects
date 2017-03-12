/**
 * Created by nbaynham on 3/12/17.
 */

var getPaths = function(path){
    var fs = require('fs');
    fs.stat(path, function(err, stats){
        if (err) {
            console.log('** ERROR: ' + err.message);
        } else {
            if (stats.isFile()) {
                fs.realpath(path, function(err, resolvedPath){
                    console.log('file: ' + resolvedPath);
                });
            } else if (stats.isDirectory()) {
                fs.realpath(path, function(err, resolvedPath){
                    console.log('directory: ' + resolvedPath);
                });

                fs.readdir(path, function(err, files){
                    files.forEach(function(f, i, ia){
                        fs.realpath(path + '/' + f, function(err, resolvedPath){
                            if (err) {
                                console.log('*** ERROR: ' + err.message);
                            } else {
                                console.log('inner file: ' + resolvedPath);
                            }
                        });
                    });
                });
            } else {
                console.log('*** Something Else ***');
            }
        }
    });
};
module.exports = getPaths;

getPaths(process.argv[2]);