/**
 * Created by nbaynham on 3/12/17.
 */

describe('File Utilities', function(){
    it('can determine if a path contains a file', function(){
        var isFile = require('../../js/files');
        var path = './package.json';
        expect(isFile(path)).toBe(true);
    });

    it('can determine path async', function(){
        var isFile = require('../../js/files2');
        var path = './package.json';
        isFile(path, function(err, stats){
            expect(stats.isFile()).toBe(true);
        });
    });
});