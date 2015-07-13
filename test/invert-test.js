'use strict';

var invert = require('../lib/doInvert');
var expect = require('chai').expect;
var fs = require('fs');

describe('doInvert.js', function() {

  var original = fs.readFileSync('./img/example.bmp');
  var inverted, reinverted;

  it('should completely invert a bitmap', function() {
    inverted = invert(original);
    expect(original.equals(inverted));
  });

  it('should equal the original bitmap when re-inverted', function() {
    reinverted = invert(inverted);
    expect(inverted.equals(original));
  });

});
