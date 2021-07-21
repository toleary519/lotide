

// make middle function that takes in array
const middle = function(arr) {
  let output = [];
  
  if (arr.length === 1 || arr.length === 2) {
    return output;
  }
  
  if (arr.length % 2 !== 0) {
    output.push(arr[Math.floor(arr.length / 2)]);
  } else {
    output.push(arr[(arr.length / 2) - 1]);
    output.push(arr[arr.length / 2]);
  }
  return output;
}
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1])) // => []
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// return the item at the middle index in an odd array so index of (length/2 )
// return the two middle items in an even array so index of (length/2) and index of [(length/2) - 1]

// edge case : return empty array if the the length is one or two

