
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed");
  } else {
    console.log("Assertion Passed");
  }
};

const countOnly = function(allItems, itemsToCount) {
  
  const results = {}
  //const count = 

  for (let item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item, results[item]);
  }
  console.log(itemsToCount);
  //console.log("count: ", count);
  return results;
}


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


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
