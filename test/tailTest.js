const assertEqual = require('../assertEqual')

const tail = require('../tail')


let result = tail(["Hello", "Lighthouse", "Labs"]);

//console.log(tail(["Hello", "Lighthouse", "Labs"]));
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
