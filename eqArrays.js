
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};

const sum = function(a, b) {
  return a + b;
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(sum(1, 2) === 3);
assertEqual(sum(1, 20) === 3);