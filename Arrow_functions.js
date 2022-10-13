const sumTwo=(a,b) => {
    return a+b
  }
  let b=sumTwo(8,9)
  console.log(b)
  console.log()
  
  const greet=() => {
    console.log("Happy Birthday!!!")
  }
  greet()
  console.log()
  
  const checkEven=(num) => {
    return num%2==0
  }
  console.log(checkEven(8))
  console.log(checkEven(285))
  console.log()
  
  
  // If we have only one argument then we can remove the parenthesis.
  // If we do that with more than two OR 0 arguments it will give error
  const print=num => {
    return num-1
  }
  console.log(print(5))
  console.log()
  
  const findfirst=str => str[0]
  console.log(findfirst("right"))