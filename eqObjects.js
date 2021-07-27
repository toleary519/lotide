

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  //console.log("ob1 keys:", object1Keys, "ob2 keys:", object2Keys);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (i = 0; i < object1Keys.length; i++) {
      //console.log("i : ", object1keys[i]);
      if (Array.isArray(object1[object1Keys[i]])) {
        //console.log("am i getting here");
        const comparison = eqArrays(object1[object1Keys[i]], object2[object2Keys[i]]);
        if (comparison === false) {
          return false;
        }
        //console.log("eqArrays:", eqArrays(object1[key], object2[key]));
      } else {
        if (object1[object1Keys[i]] !== object2[object2Keys[i]]) {
          return false;
        };
      } 
    }
    return true;
  }
}

module.exports = eqObjects;
