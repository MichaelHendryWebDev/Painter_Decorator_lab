const Room = function (sizeOfRoom) {
  this.sizeOfRoom = 5;
};

Room.prototype.sizeOfRoom = function () {
  return this.sizeOfRoom.count;
};

module.exports = Room;
