
const findKeyByValue = function(object, value) {
let keyList = Object.keys(object)
//console.log("keys :", keyList);
  for (let key of keyList) {
    if (object[key] === value) { 
      return key;
    } 
  }
};

module.exports = findKeyByValue; 