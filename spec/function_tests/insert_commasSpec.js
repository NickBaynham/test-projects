/**
 * Created by nbaynham on 3/10/17.
 */

describe("inserting comma tests", function(){
    it("contains a spec with an expectation", function(){
        var MyLib = require('./../../js/main');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    })
});