const Paint = function (inLitres) {
  this.inLitres = 10;
}

Paint.prototype.inLitres = function () {
  return this.paint.count;
}

module.exports = Paint;
