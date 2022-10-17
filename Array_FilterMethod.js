const arr = [5, 9, 8, 3, 2]

// NOTE: The callback function of filter method should always return boolean values(true or false)
// It will return  a new array and that array will contain only those numbers which give true value

// To print array of element which are even
const isEven = function(number) {
  return number % 2 === 0;
}
const ans = arr.filter(isEven)
console.log(ans)
console.log()



// To print array of element which are odd
const oddnum = arr.filter((arr) => {     // Using arrow function
  return arr % 2 == 1;
})
console.log(oddnum)