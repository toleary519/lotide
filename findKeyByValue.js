const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};

const findKeyByValue = function(object, value) {
let keyList = Object.keys(object)
//console.log("keys :", keyList);
  for (let key of keyList) {
    if (object[key] === value) { 
      return key;
    } 
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// console.log(Object.keys(bestTVShowsByGenre));
// console.log(Object.values(bestTVShowsByGenre));
// console.log(Object.entries(bestTVShowsByGenre));



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)