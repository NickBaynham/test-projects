/**
 * Created by nbaynham on 3/10/17.
 */


describe("inserting comma tests", function(){
    it("works as exported functions", function(){
        var separators = require('./../../js/exportFunctions');
        var insertCommas = separators.insertCommas;
        var insertPoints = separators.insertPoints;

        expect(insertCommas(1202405006)).toBe('1,202,405,006');
        expect(insertCommas(52)).toBe('52');

        expect(insertPoints(1202405006)).toBe('1.202.405.006');
        expect(insertPoints(52)).toBe('52');
    });
});