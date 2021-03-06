/**
 * Created by nbaynham on 3/11/17.
 */

var Counter = function(max, min){
    this._max = max;
    this._min = min || 1;
    if (this._max < this._min)
        throw new Error('Max is Greater Than Min');
    this._current = this._min;
};

Counter.prototype.next = function() {
    if (++this._current > this._max)
        throw new this._CounterException('value is too large');
    return this
};

Counter.prototype.previous = function() {
    if (--this._current < this._min)
        throw new this._CounterException('value is too small');
    return this
};

Counter.prototype.rewind = function() {
    this._current = this._min;
    return this
};

Counter.prototype.value = function() {
    return this._current
};

module.exports = Counter;