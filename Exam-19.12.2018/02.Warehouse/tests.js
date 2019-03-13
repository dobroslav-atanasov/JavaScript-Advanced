const assert = require('chai').assert;
const Warehouse = require('./warehouse');

describe('Warehouse', function () {
    it('should capacity 5', function(){
        let warehouse = new Warehouse(5);
        
        assert.equal(warehouse.capacity, 5);
    });

    it('should capacity throw exeption with string', function(){        
        assert.throw(function(){
            let warehouse = new Warehouse('asd');
        }, 'Invalid given warehouse space');
    });

    it('should capacity throw exeption with negative number', function(){        
        assert.throw(function(){
            let warehouse = new Warehouse(-10);
        }, 'Invalid given warehouse space');
    });
});