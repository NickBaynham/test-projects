/**
 * Created by nbaynham on 3/17/17.
 */

var eventEmitter = require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();

setInterval(function(){
    em.emit('timed', counter++);
}, 3000);

em.on('timed', function(data){
    console.log('timed ' + data);
});