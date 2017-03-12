/**
 * Created by nbaynham on 3/12/17.
 */

var isFile = function(path) {
    try {
        var fs = require('fs');
        var stats = fs.statSync(path);
        return (stats.isFile());
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
};

module.exports = isFile;