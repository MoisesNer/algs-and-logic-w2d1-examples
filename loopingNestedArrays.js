let nestedArr = [[1, 2], [3, 2], [2, 4], [5, 6, 7]];

for (let i = 0; i < nestedArr.length; i++) {
  // console.log('this is i', i)
  for (let j = 0; j < nestedArr[i].length; j++) {
    // console.log('this is j', j)
    console.log(nestedArr[i][j])
  }

}