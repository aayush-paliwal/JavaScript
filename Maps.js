// MAPS:
// Maps are iterable
// Store data in ordered way
// Store key:value pair like objects
// Duplicate keys are not allowed like objects

// Difference between maps and objects
// objects can only have string or symbol as key while in maps we can use anything as key like array, number, string.



// Creating map
const map=new Map()
         // OR
const map1=new Map([["id",3],["name","aayush"]])
console.log(map1)



// Adding key:value pairs
map.set("name","aayush")
map.set("age",34)
map.set(1,"one")
map.set([2,3,4],"numbers")
map.set({1:"one"},"obj")
console.log(map)
console.log(map.name)             // Gives undefined
console.log(map.get("name"))
console.log(map.keys())
console.log()

for(let key of map.keys()){
  console.log(key,typeof key)
}
console.log()


// Using for of loop
const map2=new Map()
map2.set({"1":"one"})
map2.set({"2":"two"})
map2.set({"3":"three"})

for(let i of map2){
  console.log(i,Array.isArray(i))
}
console.log()


// To check if a key is present in map or not
console.log(map2.has("4"))
console.log()


// Printing length of map
console.log(map2.size)
console.log()

// Objects to map
const person1={
  id:1,
  name:"Aayush"
}

const map3=new Map()
map3.set(person1,{gender:"male",age:14})
console.log(map3)
console.log(map3.get(person1).gender)

