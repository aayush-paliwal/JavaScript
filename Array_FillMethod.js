// To create array of length 10 having every element -1

const arr = new Array(10).fill(-1)
console.log(arr)
console.log()


// To fill element from index=1 to index=3 with 0
const arr2 = [3, 4, 5, 6, 7]
arr2.fill(0, 1, 3)           //  fill(value,start,end)
console.log(arr2)          //  change original array
