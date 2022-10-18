const num = [3, 5, 2, 7, 4]

// To check if any number is even or not
let ans = num.some((n) => n % 2 === 0)
console.log(ans)
console.log()


// To check if price of any product is less than 300 or not
const products = [
  { id: 1, name: "p1", price: 300 },
  { id: 2, name: "p2", price: 450 },
  { id: 3, name: "p3", price: 230 },
  { id: 4, name: "p4", price: 530 },
]
const result = products.some((pro) => pro.price < 300)
console.log(result)


