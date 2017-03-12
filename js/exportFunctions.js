/**
 * Created by nbaynham on 3/11/17.
 */


var applyToInteger = function(f, n) {
        return typeof n != 'number' || n%1 != 0? '' : n < 0? '-' + f(-n): f(n);
};

var insertSeparators = function(separator, n) {
    return applyToInteger(function insertSeperatorsInto(n) {
        var threeDigits = function(n) {
            var s = n.toString();
            while(s.length<3) {
                s='0' + s;
            }
            return s;
        };
        if (n < 1000)
            return n.toString();
        else
            return insertSeperatorsInto(Math.floor(n/1000)) + separator + threeDigits(n%1000);
    }, n)
};

var curry = function(f) {
    return function(a) {
        return function(b) {
            return f(a,b);
        }
    }
};

var insertSeparatorsFunction = curry(insertSeparators);
module.exports.insertCommas = insertSeparatorsFunction(',');
module.exports.insertPoints = insertSeparatorsFunction('.');