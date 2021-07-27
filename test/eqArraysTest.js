const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');

// take the item in first index of list one and list two and confirm they are the same
// do this for all items in the list


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
