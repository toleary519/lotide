
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
    for (let key of object1Keys) {
      if (object1[key] !== object2[key]) {
      return false;
      }
    return true;
    }
  }

const ab = {
  a: "1", 
  b: "2",
}
const ba = {
  b: "2",
  a: "1",
}
const abc = {
  a: "1", 
  b: "2",
  c: "3"
}
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
