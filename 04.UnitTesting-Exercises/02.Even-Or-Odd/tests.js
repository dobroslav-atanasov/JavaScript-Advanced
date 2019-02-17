const assert = require('chai').assert;
const isOddOrEven = require('./solution');

describe('isOddOrEven', function () {
    it('should return even', function () {
        let result = isOddOrEven('test');

        assert.equal(result, 'even');
    });

    it('should return odd', function () {
        let result = isOddOrEven('tests');

        assert.equal(result, 'odd');
    });

    it('should return undefined', function () {
        let result = isOddOrEven(2);

        assert.isUndefined(result);
    });
});