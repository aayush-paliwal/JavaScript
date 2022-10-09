// Primitives Data types
// There are 7 primitives data types in javascript
let a = 4
let b = null
let c = true
let d = BigInt("456")
let e = "aayush"
let f = Symbol("this is symbol")
let g = undefined  // OR let g

console.log(a, b, c, d, e, f, g)
console.log()

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof generateKeyPair)



// Non primitives data types

let classroom={
  name:"Aayush",
  rollno:4,
  subject:"Maths",
  marks:67.5
}

// Accessing object properties by two ways
console.log(classroom.name)
console.log(classroom["rollno"])