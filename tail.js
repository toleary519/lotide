const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};

const tail = function(array) {
  return array.slice(1);
};

let array = ["Hello", "Lighthouse", "Labs"];
let result = tail(["Hello", "Lighthouse", "Labs"]);

//console.log(tail(["Hello", "Lighthouse", "Labs"]));
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log(array);
console.log(result);
assertEqual(array, result);