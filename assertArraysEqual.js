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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false