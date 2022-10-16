function multiby2(number,index){
    console.log(`Number is ${number} and index is ${index}`)
    console.log("Number after multiply is",number*2)
  }
  
  let arr=[4,6,3,7]
  multiby2(arr[0],0)
  console.log()
  
  for(let i=0;i<arr.length;i++){
    multiby2(arr[i],i)
    console.log()
  }
                    // OR 
  
  // forEach method takes callback as input function
  // forEach will pass first argument as number and second argument as index
  // arr.forEach(multiby2)
  
                    // OR 
  arr.forEach(function(number,index){
    console.log("Multiplying by 3:",number*3)
  })
  console.log(arr)
  console.log()
  
  
  const arr2=[
    {name:"aayush",age:22},
    {name:"suresh",age:26},
    {name:"virat",age:24}
  ]
  
  arr2.forEach(function(name){
    console.log(name.name)
  })
  
  
  