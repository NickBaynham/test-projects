/**
 * Created by nbaynham on 3/16/17.
 */

'use strict';

let buf = new Buffer('This is Scott\'s Example');
let json = JSON.stringify(buf);
console.log(json);
let buf2 = new Buffer(JSON.parse(json).data);
console.log(buf2.toString());
console.log(buf2.toString('utf8', 8, 13));
