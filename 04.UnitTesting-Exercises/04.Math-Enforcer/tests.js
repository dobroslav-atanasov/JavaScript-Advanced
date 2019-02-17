const assert = require('chai').assert;
const mathEnforcer = require('./solution');

describe('mathEnforcer', function () {
    it('addFive should return 10', function () {
        let number = 5;

        let result = mathEnforcer.addFive(number);

        assert.equal(result, 10);
    });

    it('addFive should return 10.5', function () {
        let number = 5.5;

        let result = mathEnforcer.addFive(number);

        assert.equal(result, 10.5);
    });

    it('addFive should return 4', function(){
        let number = -1;

        let result = mathEnforcer.addFive(number);

        assert.equal(result, 4);
    });

    it('addFive should return undefined', function(){
        let number = 'test';

        let result = mathEnforcer.addFive(number);

        assert.isUndefined(result);
    });

    it('subtractTen should return 10', function () {
        let number = 20;

        let result = mathEnforcer.subtractTen(number);

        assert.equal(result, 10);
    });

    it('subtractTen should return 10', function () {
        let number = -20;

        let result = mathEnforcer.subtractTen(number);

        assert.equal(result, -30);
    });

    it('subtractTen should return 2.5', function () {
        let number = 12.5;

        let result = mathEnforcer.subtractTen(number);

        assert.equal(result, 2.5);
    });

    it('subtractTen should return undefined', function(){
        let number = 'test';

        let result = mathEnforcer.subtractTen(number);

        assert.isUndefined(result);
    });

    it('sum should return 30', function () {
        let num1 = 10;
        let num2 = 20;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 30);
    });

    it('sum should return 20.3', function () {
        let num1 = 10.1;
        let num2 = 10.2;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 20.3);
    });

    it('sum should return 20.1', function () {
        let num1 = 10.1;
        let num2 = 10;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 20.1);
    });

    it('sum should return 20.2', function () {
        let num1 = 10;
        let num2 = 10.2;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 20.2);
    });

    it('sum should return undefined', function () {
        let num1 = 'test';
        let num2 = 20;

        let result = mathEnforcer.sum(num1, num2);

        assert.isUndefined(result);
    });

    it('sum should return undefined', function () {
        let num1 = 10;
        let num2 = 'test';

        let result = mathEnforcer.sum(num1, num2);

        assert.isUndefined(result);
    });

    it('sum should return undefined', function () {
        let num1 = 'test';
        let num2 = 'test';

        let result = mathEnforcer.sum(num1, num2);

        assert.isUndefined(result);
    });
});