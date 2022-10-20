// SETS:
// They are iterable
// No index based access
// Unique items only

// Creating sets
const num = new Set([3, 4, 5, 6])
console.log(num)
console.log(num[2])        // Gives undefined
console.log()

const str = new Set("sets")
console.log(str)
console.log()


// Adding elements to set
const set = new Set()
set.add(4)
set.add(5)
set.add([1, 2, 4])
set.add(6)
set.add([1, 2, 4])      // Now it will get added
console.log(set)
console.log()


// Checking if specified element is present in set or not
const set2 = new Set([3, 4, 5, 6])
console.log(set2.has(4))
console.log()


// Using for of loop in sets
for (let i of set2) {
  console.log(i)
}
console.log()


// Get unique elements from arr
const arr = [1, 2, 3, 3, 3, 4, 5, 4, 5]
const uniqueElement = new Set(arr)
console.log(uniqueElement)
console.log()


// Get length of sets
const set3 = new Set([1, 2, 3, 4])
console.log(set3.length)        // Gives undefined
let length = 0;
for (let i of set3) {
  length++
}
console.log(length)
console.log()


// Deleting elements of sets
set3.delete(3)
console.log(set3)
console.log()

console.log(set3.values())
