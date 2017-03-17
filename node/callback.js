/**
 * Created by nbaynham on 3/16/17.
 */

var fib = function(n) {
    if (n < 2) return n;
    return fib(n -1) + fib(n - 2);
};

var Obj = function(){};
Obj.prototype.doSomething = function(arg1_){
    var callback_ = arguments[arguments.length -1];
    var callback = (typeof(callback_) == 'function'? callback_ : null);
    var arg1 = typeof arg1_ === 'number' ? arg1_ : null;
    if (!arg1)
        return callback(new Error('first arg missing or not a number'));
    process.nextTick(function(){
        var data = fib(arg1);
        callback(null, data);
    });
};

var test = new Obj();
var number = 10;

test.doSomething(number, function(err, value){
    if (err)
        console.log(err);
    else
        console.log('fibonaci value for %d is %d', number, value);
});

console.log('called doSomething');
