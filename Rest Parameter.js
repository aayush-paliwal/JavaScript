function func(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is `,c)
  }
  
  func(4,8,6,3,4)
  
  function addAll(...a){
    console.log(a)
    console.log(typeof a)
    let sum=0
    for(let i of a){
      sum=sum+i
    }
    return sum
  }
  
  console.log("Sum is:",addAll(1,2,3,4,5,6))