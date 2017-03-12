/**
 * Created by nbaynham on 3/12/17.
 */

describe('Walking a directory hierarchy.', function(){
    it('can walk the directory listing from a given path', function(){
        var getPaths = require('../../js/directory');
        expect(getPaths).not.toBe(null);
        getPaths('/Users/nbaynham/Documents');
    });
});