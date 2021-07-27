
const without = function(arrayFull, arrayRem) {

  let keepArr = [...arrayFull];
  
      for (let i = 0; i < arrayFull.length; i++) {
        for (let j = 0; j <arrayRem.length; j++) {
          if (arrayFull[i] === arrayRem[j]) {
            keepArr.splice(i, 1);
          }
        } 
      }
  //console.log(arrayFull);  
  return keepArr;
  };

module.exports = without; 

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
