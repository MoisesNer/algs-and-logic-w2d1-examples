// the .map method creates a new array with the results of
// calling a function on every element of the original array
let nums = [1, 5, 7, 8, 9, 0];

console.log('this is nums ', nums)

const mapped = nums.map(element => element + 30);

console.log('this is mapped ', mapped);

console.log('this is the original array ', nums)