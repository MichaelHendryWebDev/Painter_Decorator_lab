const assert = require('assert');
const Decorator = require('../tdd_painter_decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js')

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

    describe('room', function () {
      let room;
      beforeEach(function () {
        room = new Room();
      });

      it('should have room size of square meters', function () {
        const actual = room.sizeOfRoom;
        assert.strictEqual(actual, 5);
      });

      it('should not be painted', function () {
        const actual = room.notPainted;
        assert.strictEqual(actual, 'Not painted')
      });

      it('should be painted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, 'painted')
      });

      describe('paint', function () {
        let paint;
        beforeEach(function () {
          paint = new Paint();
        });

        it('should show how many litres of paint', function () {
          const actual = paint.inLitres;
          assert.strictEqual(actual, 10);
        });

        it ('should check if empty', function () {
          const actual = paint.isPaintEmpty();
          assert.strictEqual(actual, 'not empty')
        });
      });
    });



  });

});
