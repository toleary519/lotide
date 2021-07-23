
const map = function(array, callback){
  const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const animals = ["groundhog", "cat", "tiger", "monkey", "tarantula"]

const results1 = map(words, word => word[0]); 
console.log(results1);

const results2 = map(animals, animal => animal[0]);
console.log(results2);


const assertArraysEqual = function(input) {
  if (input === false) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};


const eqArrays = function(arrayOne, arrayTwo) {

if (arrayOne.length !== arrayTwo.length) {
  return false;
}

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } 
  }  
return true;
};

assertArraysEqual(eqArrays(results1, results2)); // => true
assertArraysEqual(eqArrays(results1, [3, 2, 1])); // => false



