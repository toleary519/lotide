
// const eqObjects = function(object1, object2) {
//   let object1Keys = Object.keys(object1);
//   let object2Keys = Object.keys(object2);
  
//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }
//     for (let key of object1Keys) {
//       if (object1[key] !== object2[key]) {
//       return false;
//       }
//     return true;
//     }
//   }

// const ab = {
//   a: "1", 
//   b: "2",
// }
// const ba = {
//   b: "2",
//   a: "1",
// }
// const abc = {
//   a: "1", 
//   b: "2",
//   c: "3"
// }
// console.log(eqObjects(ab, ba));
// console.log(eqObjects(ab, abc));

const eqArrays = function(arrayOne, arrayTwo) {

if (arrayOne.length !== arrayTwo.length) {
  return false;
}

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } 
  }  
return true;
};

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
  // for (let key of object1Keys) {
  //   if (Array.isArray(key)) {
  //     console.log("key", key)
  //     eqArrays(object1[key], object2[key]);
  //     //console.log("eqArrays:", eqArrays(object1[key], object2[key]));
  //     } else if (object1[key] !== object2[key]) {
  //       return false;
  //     } 
  //   return true;
  // }



const cd = { c: "1", d: ["2", 3] };

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); //should be false
