const assertEqual = require('../assertEqual');

const sum = function(a, b) {
  return a + b;
};


assertEqual(sum(1, 2), 3);
assertEqual(sum(1, 20) === 3);