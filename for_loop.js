let a =prompt("Enter number whose table you want:")
for(let i=1;i<11;i++){
  console.log(a,"X",i,"=",a*i)
}

let b=prompt("Enter digits upto sum you want: ")
b=Number.parseInt(b)
let sum=0
for(let i=1;i<b+1;i++){
  sum+=i;
}
console.log("Your sum is: ",sum)
console.log()



// For In loop
let a1=["a","b","c","d"]
let a2={
  aayush:45,
  amit:52,
  alex:29,
}

for(let i in a1){
  console.log("Element at index ",i,"is",a1[i])
}
console.log()
for(let i in a2){
  console.log("Marks of ",i, "are",a2[i])
}
console.log()



// For Of Loop
for(let i of "aayush"){
  console.log(i)
}
console.log()

for(let i of a1){
  console.log(i)
}

// for(let i of a2){
//   console.log(i)   // Not work for here
// }