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

var wrongInput = {
  'A' : ['C', 'D'],
  'B' : 'D',
  'C' : null,
  'D' :'E',
  'E' : null,
  'F' : null,
  'G' : 'F'
}

var wrongInput2 = {
  'A' : 'C',
  'B' : 'D',
  'C' : 'null',
  'D' :'E',
  'E' : '',
  'F' : null,
  'G' : 'F'
}

var changedList = {
  'A' : 'C',
  'B' : 'A',
  'C' : 'B',
  'D' :'E',
  'E' : '',
  'F' : null,
  'G' : 'F'
}

test('perfect sequence', function (t) {
  var actual = perfectSequence(destinations);
  var expected = ['F', 'G', 'E', 'D', 'B', 'C', 'A'];

  t.deepEqual(actual, expected);
  t.end();
});

test('perfect sequence if dependency is before of the key in the destination list', function (t) {
  var actual = perfectSequence(changedList);
  var expected = ['F', 'G', 'E', 'D', 'A', 'B', 'C' ];

  t.deepEqual(actual, expected);
  t.end();
});

test('more than one dependency', function (t) {
  t.throws(function(){perfectSequence(wrongInput)});
  t.end();
});

test('wrong format of no dependecy', function (t) {
  var actual = perfectSequence(wrongInput2);
  var expected = ['F', 'G', 'E', 'D', 'B', 'C', 'A'];

  t.deepEqual(actual, expected);
  t.end();
});

test('checking dependency loop', function (t) {
  t.throws(function(){chekLoop(wrongInput)});
  t.end();
});
