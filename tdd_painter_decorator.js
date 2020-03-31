const Decorator = function (paintStock) {
  this.paintStock = [];
};

Decorator.prototype.paintInStock = function () {
  return this.paintStock.length;
};

Decorator.prototype.addToPaintStock = function (paint) {
  return this.paintStock.push(paint)
};

module.exports = Decorator;
