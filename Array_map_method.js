const arr=[4,3,5,7]

// map method creates a new array
const square=function(number){
  return number * number
}
const newArr=arr.map(square)
console.log(newArr)
console.log(arr)
console.log()

//            OR

const cube=arr.map(function(number){
  return number*number*number
})
console.log(cube)
console.log()


const arr2=[
  {name:"aayush",age:22},
  {name:"suresh",age:26},
  {name:"virat",age:24}
]

const arrName=arr2.map(function(obj){
  return obj.name
})
console.log(arrName)
console.log()