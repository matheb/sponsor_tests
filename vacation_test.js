'use strict';

var test = require('tape');
var perfectSequence = require('./vacation.js');

var destinations = {
  'A' : 'C',
  'B' : 'D',
  'C' : null,
  'D' :'E',
  'E' : null,
  'F' : null,
  'G' : 'F'
}

test('perfect sequence', function (t) {
  var actual = perfectSequence(destinations);
  var expected = ['F', 'G', 'E', 'D', 'B', 'C', 'A'];

  t.equal(actual, expected);
  t.end();
});
