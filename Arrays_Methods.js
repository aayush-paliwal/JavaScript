let arr1 = [1, 2, 5, 4]

// Converting array to string
let b = arr1.toString()
console.log(b + "  Type is: " + typeof (b))

let c = arr1.join("$")     // Here we can also specify the separator
console.log(c + "  Type is: " + typeof (c))
console.log()



// Adding and removing elements from array
let arr2 = [1, 2, 3]
arr2.push(4)           // Add elemnts at last
console.log(arr2)

arr2.unshift(5)       // Add elements at front
console.log(arr2)

arr2.pop()           // Removes element from last
console.log(arr2)

arr2.shift()        // Removes element from front
console.log(arr2)
console.log()



// Deleting elements of array
let arr3 = [4, 8, 3, 1]
delete arr3[2]       // delete leaves undefined holes in the array
console.log(arr3)
console.log(arr3[2])
console.log()



// Concatenating array
let concatarr = arr1.concat(arr2, arr3)
console.log(concatarr)     // not change original array(arr1 here)
console.log()



// Array splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits)
fruits.splice(2, 2, "Grapes", "Litchi")
console.log(fruits)
console.log()

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.



// Reversing an array
arr5 = ["k", "g", "f", "a", "z", "p"]
arr5.reverse()         // Reverses the original
console.log(arr5)



// Sorting an array
// This method works for strings but not for numbers
arr5.sort()          // Sorts original
console.log(arr5)
console.log()

// For numbers use this
arr6 = [12, 6, 2, 17, 3]
arr6.sort(function(a, b) { return b - a })     // For descending
console.log(arr6)
arr6.sort(function(a, b) { return a - b })     // For ascending
console.log(arr6)
console.log()



// Finding max element in the array
arr7 = [12, 6, 2, 17, 3]
console.log(Math.max.apply(null, arr7))


// Finding min element in the array
arr8 = [-4, 0, 18, 2, 29, -8]
console.log(Math.min.apply(null, arr8))
console.log()



// To check specified element is present in array or not
const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits2.includes("Apple"))
console.log()



// To check index of an element
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Melon"]
console.log(fruits3.indexOf("Orange"))
console.log(fruits3.indexOf("Orange", 2))   // 2 specify starting of search



// To check last occurence of index of an element
const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Melon", "Mango"]
console.log(fruits4.lastIndexOf("Mango"))
