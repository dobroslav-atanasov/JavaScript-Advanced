const assert = require('chai').assert;
const isSymmetric = require('./solution');

describe('isSymmetric', function () {
    it('should return is valid array', function () {
        let array = 'test';

        let result = isSymmetric(array);

        assert.isFalse(result);
    });

    it('should return is symmetric', function () {
        let array = [1, 2, 2, 1];

        let result = isSymmetric(array);

        assert.isTrue(result);
    });

    it('should return is symmetric', function () {
        let array = [1];

        let result = isSymmetric(array);

        assert.isTrue(result);
    });

    it('should return is symmetric', function () {
        let array = [1, 2, 1];

        let result = isSymmetric(array);

        assert.isTrue(result);
    });

    it('should return is not symmetric', function () {
        let array = [1, 2, 5, 1];

        let result = isSymmetric(array);

        assert.isFalse(result);
    });

    it('should return is not symmetric', function () {
        let array = ['test', 'test'];

        let result = isSymmetric(array);

        assert.isTrue(result);
    });
});