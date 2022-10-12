// Arrays are ordered collection of items

// Creation
let names=["Aman","Aayush","Pankaj"]
console.log(names)
console.log(names[1])
console.log(typeof(names))
console.log(names.length)
console.log()

let name=new Array("Aman","Aayush","Pankaj")
console.log(name)


// We can store any type of data type in arrays
let arr=[1,"name",1.4,null,undefined,0]
console.log(arr)
console.log()

// To check arr is array or not
console.log(Array.isArray(arr))
console.log()


// For loop in array
let arr3 = ["aayush", "ajay", "ben"]

for (let i = 0; i < arr3.length; i++) {
  console.log("Element " + (i + 1) + " is: " + arr3[i])
}
console.log()

// While loop in array
let i = 0
while (i <= arr3.length - 1) {
  console.log(arr3[i].toUpperCase())
  i++
}
console.log()

// For of loop in array 
for (let i of arr3) {
  console.log(i + "->" + i.toUpperCase())
}
console.log()

// For in loop
for (let i in arr3) {
  console.log(arr3[i] + "->" + arr3[i].toUpperCase())
}


