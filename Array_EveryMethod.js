const num = [3, 5, 9, 7, 1]

// To check if every number is even or not
let ans = num.every((number) => {
  return number % 2 === 0
})
console.log(ans)

// This method returns true/false
// Will check conditon for every element of array
// It will give true only when all elements are even otherwise gives false




const products = [
  { id: 1, name: "p1", price: 300 },
  { id: 2, name: "p2", price: 450 },
  { id: 3, name: "p3", price: 230 },
  { id: 4, name: "p4", price: 530 },
]

// To check if price of every product is less than 550 or not
const checkprice = products.every((products) => {
  return products.price <= 550
})
console.log(checkprice)
