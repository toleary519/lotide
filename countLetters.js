
const countLetters = function(string) { 

let output = {};
//loopNum = 0;
let spacelessString = string.split(" ").join(""); 

  for (let letter of spacelessString) {
    if (output[letter]) {
      output[letter] += 1;
      //console.log("if output:", output);
    } else {
      output[letter] = 1;
      //console.log("else:", letter)
    }
  }
return output;
};
// console.log(countLetters("LHL"));
// console.log(countLetters("thomas"));
console.log(countLetters("hello hello"));
