'use strict';

var fs = require('fs');
var doInvert = require('./lib/doInvert');

var inputPath;
var outputPath;
var invertedStream;

if (process.argv.length === 4) {
  inputPath = process.argv[2];
  fs.readFile(inputPath, function(err, data) {
    // make sure we have a bitmap file
    if (err) {
      throw new Error();
    }
    if (data.toString('ascii', 0, 2) !== 'BM') {
      throw new Error('Not a bitmap file');
    }

    // actually do the invert operation
    invertedStream = doInvert(data);

    outputPath = process.argv[3];

    fs.writeFile(outputPath, invertedStream, function(err) {
      if (err) throw new Error();
    });

  });

} else {
  throw new Error('Must specify an input and an output');
}
