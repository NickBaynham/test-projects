/**
 * Created by nbaynham on 3/12/17.
 */

var isFile = function(path, callback) {
    var fs = require('fs');
    fs.stat(path, callback);
};
module.exports = isFile;