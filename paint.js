const Paint = function (inLitres) {
  this.inLitres = 10;
}

Paint.prototype.inLitres = function () {
  return this.paint.count;
}

Paint.prototype.isPaintEmpty = function () {
  if (this.inLitres == 0) {
    return 'empty'
  } else {
    return 'not empty'
  }
}

module.exports = Paint;
