// Printing sum of all the numbers
const arr = [8, 6, 9, 3, 1]

// To print the sum of all elements of the array
// Arrow Function.We can also pass initial value of the accumulator(here 100)
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)

console.log(sum)
console.log()

// First of all accumulator and currentValue will have values first and second element of array and after that accumulator will have values of last return value and currentValue will have value of next element of array 
// accumulator         currentValue         return
// 8                    6                     14
// 14                   9                     23
// 23                   3                     26
// 26                   1                     27



// To print the total price of all the items in the cart
const obj = [
  { productId: 1, proname: "mobile", price: 12000 },
  { productId: 2, proname: "laptop", price: 32000 },
  { productId: 3, proname: "tv", price: 15000 }
]

const ans = obj.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price
}, 0)
console.log(ans) 