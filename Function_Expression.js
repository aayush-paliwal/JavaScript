// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable.

const x=function(a,b){
    console.log("Sum is: ")
    return a+b
  }
  
  const firstchar=function(a){
    console.log("First char is: ",a[0])
  }
  
  let y=x(7,8)
  console.log(y)
  console.log(x(4,8))
  console.log()
  
  console.log(firstchar("Strings"))
  
  