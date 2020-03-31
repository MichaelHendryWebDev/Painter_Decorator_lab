const assert = require('assert');
const Decorator = require('../tdd_painter_decorator.js');

describe('decorator', function () {
  let decorator;
  beforeEach(function () {
    decorator = new Decorator();
  });

  describe('Paint Stock', function () {
    it('should have no paint in stock', function () {
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, []);
    });

    it('should return amount of paint in stock', function () {
      const actual = decorator.paintInStock();
      assert.strictEqual(actual, 0);
    });
  });


});
