const assert = require('chai').assert;
const tail  = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse' 'Labs' for string", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });
  it("returns 4, 5 for 3, 4, 5", () => {
    assert.deepEqual(tail([3, 4, 5]), [4, 5]); 
  });
});







// const assertEqual = require('../assertEqual')

// const tail = require('../tail')


// let result = tail(["Hello", "Lighthouse", "Labs"]);

// //console.log(tail(["Hello", "Lighthouse", "Labs"]));
// //assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
