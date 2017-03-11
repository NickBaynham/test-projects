/**
 * Created by nbaynham on 3/11/17.
 */

var protoCounter = {
    setUp: function(max, min){
        this._max = max;
        this._min = min || 1;
        this._current = this._min;
    },

    next: function(){
        if (++this._current > this._max)
            throw new this._CounterException('value is too large');
        return this
    },

    previous: function(){
        if (--this._current < this._min)
            throw new this._CounterException('value is too small');
        return this
    },

    rewind: function(){
        this._current = this._min;
        return this
    },

    value: function(){
        return this._current
    },

    _CounterException: function (message) {
        this.message = message;
        this.name = 'CounterException';
    }
};

module.exports = protoCounter;