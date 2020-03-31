const assert = require('assert');
const Decorator = require('../tdd_painter_decorator.js');
const Room = require('../room.js');

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

    it('should add paint to paint stock', function () {
      decorator.addToPaintStock('Red');
      const actual = decorator.paintInStock();
      assert.strictEqual(actual, 1)
    });

    describe('room size', function () {
      let room;
      beforeEach(function () {
        room = new Room();
      });

      it('should have room size of square meters', function () {
        const actual = room.sizeOfRoom;
        assert.strictEqual(actual, 5);
      });
    });



  });

});
