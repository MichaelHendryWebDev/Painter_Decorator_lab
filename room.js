const Room = function (sizeOfRoom, toPaint) {
  this.sizeOfRoom = 5;
  this.notPainted = 'Not painted'
  this.painted = 'painted'
};

Room.prototype.sizeOfRoom = function () {
  return this.sizeOfRoom.count;
};

Room.prototype.notPainted = function () {
  return 'Not painted'
};

Room.prototype.painted = function () {
  return 'painted'
};

module.exports = Room;
