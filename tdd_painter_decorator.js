const Decorator = function (paintStock) {
  this.paintStock = [];
};

Decorator.prototype.paintInStock = function () {
  return this.paintStock.length;
}

module.exports = Decorator;
