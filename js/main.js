/**
 * Created by nbaynham on 3/7/17.
 */

var MyLib = function() {
    this.threeDigits = function(n) {
        var s = n.toString();
        while (s.length < 3)
            s = '0' + s;
        return s
    };

    this.insertCommasInto = function(n) {
        if (n < 1000)
            return n.toString();
        else
            return this.insertCommasInto(Math.floor(n/1000)) + ',' + this.threeDigits(n%1000)
    };

    this.insertCommas = function(n) {
        return typeof n != 'number' || n%1 != 0 ? '': n < 0 ? '-' + this.insertCommasInto(-n): this.insertCommasInto(n)
    }
};
module.exports = MyLib;

