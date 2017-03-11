/**
 * Created by nbaynham on 3/10/17.
 */

describe("inserting comma tests", function(){
    it("contains a spec with an expectation", function(){
        var MyLib = require('./../../js/main');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    });

    it("works for lib2 as well", function(){
        var MyLib = require('./../../js/lib2');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    });

    it("works for lib3 as well", function(){
        var MyLib = require('./../../js/lib3');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    });

    it("works for lib4 as well", function(){
        var MyLib = require('./../../js/lib4');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    });

    it("works for lib5 as well", function(){
        var MyLib = require('./../../js/lib5');
        var myLib = new MyLib();
        expect(myLib.insertCommas(1202405006)).toBe('1,202,405,006');
        expect(myLib.insertCommas(52)).toBe('52');
    });

    it("can choose yes or no", function(){
        var MyLib = require('./../../js/lib5');
        var myLib = new MyLib();
        expect(myLib.choose(-1)).toBe('no');
        expect(myLib.choose(0)).toBe('no');
        expect(myLib.choose(1)).toBe('yes');
        expect(myLib.choose(999)).toBe('yes');
        expect(myLib.choose(0.000001)).toBe('yes');
    });

    it("can create Counters", function(){
        var counter = require('./../../js/counter');
        expect(counter).not.toBe(null);
        expect(counter._min).toBe(1);
        expect(counter._max).toBe(10);
        expect(counter._current).toBe(1);
        counter.next();
        expect(counter._current).toBe(2);
        counter.next().next().next().next().next().next().next().next();
        expect(counter._current).toBe(10);
        try {
            counter.next();
        }
        catch (e) {
            expect(e.name).toBe('CounterException');
            expect(e.message).toBe('value is too large')
        }
    });
});