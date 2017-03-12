/**
 * Created by nbaynham on 3/10/17.
 */

describe("creating counter objects", function(){
    it("contains a spec with an expectation", function(){
        var protoCounter = require('./../../js/counterObjects');
        expect(protoCounter).not.toBe(null);
        var c1 = Object.create(protoCounter);
        c1.setUp(10);
        var cs = Object.create(protoCounter);
        cs.setUp(20, 10);
        cs.rewind();
    });

    it("Create Counter with Constructor", function(){
        var Counter = require('./../../js/Counter2');
        c1 = new Counter(10);
        c2 = new Counter(20, 10);
        c1.next();
        c1.previous();
        expect(c1.next().value()).toBe(2);
    });
});