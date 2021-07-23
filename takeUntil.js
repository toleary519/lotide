
const takeUntil = function(array, callback) {

let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item); 
    } else {
      break;
      }  
    }
  return output;
};

const data1 = [1, 2, 3, 4, 5, 6, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0)
console.log(result1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ",");
console.log(result2);

