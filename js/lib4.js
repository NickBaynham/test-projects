/**
 * Created by nbaynham on 3/11/17.
 */

var Util = function() {
    var applyToInteger = function(f, n){
        return typeof n != 'number' || n%1 != 0? '': n < 0? '-' + f(-n): f(n);
    };


    this.insertCommas = function(n) {
        return applyToInteger(function insertCommasInto(n){
            if (n < 1000)
                return n.toString();
            else
                return insertCommasInto(Math.floor(n/1000)) + ',' + threeDigits(n%1000);
        }, n);
    };

    var threeDigits = function(n) {
        var s = n.toString();
        while (s.length < 3)
            s = '0' + s;
        return s
    };
};
module.exports = Util;