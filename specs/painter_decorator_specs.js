const assert = require('assert');
const Decorator = require('../tdd_painter_decorator.js');

describe('decorator', function () {
  it('should have paint stock', function () {
    const decorator = new Decorator(0);
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 0);
  });

  it('should add to paint stock', function () {
    const decorator = new Decorator(1);
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 1);
  });
});
