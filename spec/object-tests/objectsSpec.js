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

});