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

const eqObjects = function(object1, object2) {
  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (i = 0; i < object1Keys.length; i++) {
      if (Array.isArray(object1[object1Keys[i]])) {
        const comparison = eqArrays(object1[object1Keys[i]], object2[object2Keys[i]]);
        if (comparison === false) {
          return false;
        }
      } else {
        if (object1[object1Keys[i]] !== object2[object2Keys[i]]) {
          return false;
        };
      } 
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};
const cd = { c: "1", d: ["2", 3] };

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2));