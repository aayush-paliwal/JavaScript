// Declaring/Creating Function

function greet(){
    console.log("Hello")
  }
  
  function sumTwoNum(a, b){
    return a+b
  }
  
  function check(num){
    if(num%2==0){
      return "Even"
    }
    else{
      return "Odd"
    }
  }
  
  function firstchar(s){
    return s[0]
  }
  
  function index(arr,tar){
    for(let i of arr){
      if(i===tar){
        return i
      }
    }
    return -1
  }
  
  // Calling/Innvoking/Running function
  greet()
  console.log()
  
  console.log(sumTwoNum(2,7))
  console.log()
  
  let a=check(8)
  console.log(a)
  let b=check(5)
  console.log(b)
  console.log()
  
  console.log(firstchar("asde"))
  console.log()
  
  const arr=[3,7,2,6]
  const tar=2
  console.log("Index is: ",index(arr,tar))
  console.log()
  
  
  // arguments.length  property returns the number of argumentes received when function was invoked 
  function func(a,c,b){
    return arguments.length
  }
  let n=func(7,8,9,2)
  console.log(n)
  consolelog()
  
  // toString() method returns the function as a string
  console.log(func.toString())