// takes a stream of bitmap data, inverts it, returns it

function invert(stream) {
  var size = stream.readUInt32LE(2);
  if (stream.readUInt32LE(10) === 54) {
    var start = stream.readUInt32LE(10);
    for (var i = start; i < size; i++) {
      stream.writeUInt8(255 - stream.readUInt8(i), i);
    }
  }
  return stream;
}

module.exports = invert;
