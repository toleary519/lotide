
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const countOnly = function(allItems, itemsToCount) {
  
  const results = {}
  return results;
}


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
