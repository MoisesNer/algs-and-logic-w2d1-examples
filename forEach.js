// The .forEach method loops through an array and applies a certain
// function at each element of the array

const nums = [1, 2, 3, 4]

nums.forEach(element => {
  element += 1;
  console.log(element)
})

console.log(nums)