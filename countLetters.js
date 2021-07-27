
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

module.exports = countLetters; 
