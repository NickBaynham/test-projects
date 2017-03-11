/**
 * Created by nbaynham on 3/11/17.
 */

var counter = {
    _min: 1,
    _max: 10,
    _current: 1,

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

    _CounterException: function (message) {
        this.message = message;
        this.name = 'CounterException';
    }
};

module.exports = counter;