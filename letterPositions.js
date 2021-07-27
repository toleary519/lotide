
const letterPositions = function(string) {
  let output = {};
  let loopNum = 0;
  let spacelessString = string.split("").join(""); 
  
    for (let letter of spacelessString) {
      if (letter !== " ") {
        if (output[letter]) {
          output[letter].push(loopNum);
        } else {
          output[letter] = [loopNum];
        }
      }
      loopNum++;  
    }
  return output;
};

// console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;