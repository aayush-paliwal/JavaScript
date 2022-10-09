// Var has global scope.
// We can update and redeclare var
var a = 5
var a = "Aayush"  // True
a = 7             // True
console.log(a)

{
  var a = 6
  console.log(a)
}
console.log(a)
console.log()





// let has local scope
// We can update let variable.But we can not redeclare it
let b = 3
b = "set"  // True
// let b="set"   // False
console.log(b)

{
  let b = 5
  console.log(b)
}
console.log(b)
console.log()





// const has also blocked scope
// We can neither update nor redeclare const variable
const c = 8
// c=9               // False
// const c=4        // False
console.log(c)

{
  const c = 7
  console.log(c)
}
console.log(c)