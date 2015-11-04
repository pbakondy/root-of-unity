'use strict';

var Complex = require('Complex');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&	isFinite(value) && Math.floor(value) === value;
};

module.exports = function (x) {
  if (!Number.isInteger(x)) {
    throw new TypeError('Integer parameter expected');
  }

  if (x < 1) {
    throw new TypeError('Parameter must be greater than zero');
  }

  var roots = [];
  roots.push(new Complex(1, 0));

  var i, re, im;
  for (i = 1; i < x; i++) {
    re = Math.cos(2 * Math.PI * i / x);
    im = Math.sin(2 * Math.PI * i / x);
    roots.push(new Complex(re, im));
  }

  return roots;
};
