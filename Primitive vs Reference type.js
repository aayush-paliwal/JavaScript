// Primitives Types

let num1 = 4
let num2 = num1
console.log("value of num1 is: " + num1)
console.log("value of num2 is: " + num2)
console.log("Incrementing num1")
num1++
console.log("value of num1 is: " + num1)
console.log("value of num2 is: " + num2)
console.log()


// Reference Types

let arr1 = [1, 2, 3]
let arr2 = arr1
console.log("arr1 is: " + arr1)
console.log("arr2 is: " + arr2)
console.log("Pushing 4 in arr1")
arr1.push(4)
console.log("arr1 is: " + arr1)
console.log("arr2 is: " + arr2)



// To clone an array

let arr3 = [4, 5, 6, 8]
// let arr4=[4,5,6,8]      // Not good method
//      OR
// let arr4=[].concat(arr3)     
//      OR
// let arr4=arr3.slice(0)
//      OR New Way
let arr4 = [...arr3]      // Using spread operator

// Now after cloning if any change is made in arr3 then it will nor reflect in arr4
arr3.push(7)
console.log(arr3)
console.log(arr4)



// To add some extra items apert from arr3

// let arr5=[...arr3,11,15,16]
//      OR
let arr5 = [].concat(arr3, 11, 15, 16)
console.log(arr5)