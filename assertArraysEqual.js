const assertArraysEqual = function(input) {
  if (input === false) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};


const eqArrays = require('./eqArrays')

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

module.exports = assertArraysEqual; 