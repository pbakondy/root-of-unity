'use strict';

var test = require('tape');
var Complex = require('Complex');
var rootOfUnity = require('./');

test('parameter check', function (t) {
  t.throws(function(){ rootOfUnity(); }, 'should throw undefined');
  t.throws(function(){ rootOfUnity(''); }, 'should throw string');
  t.throws(function(){ rootOfUnity(true); }, 'should throw boolean');
  t.throws(function(){ rootOfUnity(NaN); }, 'should throw NaN');
  t.throws(function(){ rootOfUnity(1.5); }, 'should throw fraction number');
  t.throws(function(){ rootOfUnity(0); }, 'should throw 0');
  t.doesNotThrow(function(){ rootOfUnity(1); }, 'should accept 1');
  t.end();
});

test('calculation result type', function (t) {
  t.equal(typeof rootOfUnity(1), 'object', 'result type is object');
  t.ok(Array.isArray(rootOfUnity(1)), 'result if array');
  t.equal(rootOfUnity(1).length, 1, 'array length is 1');
  t.equal(rootOfUnity(10).length, 10, 'array length is 10');
  t.ok(rootOfUnity(1)[0] instanceof Complex, 'Complex value');
  t.end();
});

function roundTo(x) {
  return x.toFixed(5);
}

test('calculation result values', function (t) {
  var roots;

  roots = rootOfUnity(1).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' } ], '1st root of unity values');

  roots = rootOfUnity(2).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.00000', real: '-1.00000' } ], '2nd root of unity values');

  roots = rootOfUnity(3).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.86603', real: '-0.50000' }, { im: '-0.86603', real: '-0.50000' } ], '3rd root of unity values');

  roots = rootOfUnity(4).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '1.00000', real: '0.00000' }, { im: '0.00000', real: '-1.00000' }, { im: '-1.00000', real: '-0.00000' } ], '4th root of unity values');

  roots = rootOfUnity(5).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.95106', real: '0.30902' }, { im: '0.58779', real: '-0.80902' }, { im: '-0.58779', real: '-0.80902' }, { im: '-0.95106', real: '0.30902' } ], '5th root of unity values');

  roots = rootOfUnity(6).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.86603', real: '0.50000' }, { im: '0.86603', real: '-0.50000' }, { im: '0.00000', real: '-1.00000' }, { im: '-0.86603', real: '-0.50000' }, { im: '-0.86603', real: '0.50000' } ], '6th root of unity values');

  roots = rootOfUnity(7).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.78183', real: '0.62349' }, { im: '0.97493', real: '-0.22252' }, { im: '0.43388', real: '-0.90097' }, { im: '-0.43388', real: '-0.90097' }, { im: '-0.97493', real: '-0.22252' }, { im: '-0.78183', real: '0.62349' } ], '7th root of unity values');

  roots = rootOfUnity(8).map(roundTo);
  t.deepEqual(roots, [ { im: '0.00000', real: '1.00000' }, { im: '0.70711', real: '0.70711' }, { im: '1.00000', real: '0.00000' }, { im: '0.70711', real: '-0.70711' }, { im: '0.00000', real: '-1.00000' }, { im: '-0.70711', real: '-0.70711' }, { im: '-1.00000', real: '-0.00000' }, { im: '-0.70711', real: '0.70711' } ], '8th root of unity values');

  t.end();
});
