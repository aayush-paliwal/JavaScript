// Iterables:(like String, array)
// Iterables are those on which we can apply for-of loop.

const str = "String"
for (let i of str) {
  console.log(i)
}
console.log()

const arr = ["a", "b", "c", "d"]
for (let i of arr) {
  console.log(i)
}
console.log()


// Array like objects:(like String)
// Those which have length property and those which can be accessed by their index

const name = "aayush"
console.log(name.length)
console.log(name[3])
console.log()

