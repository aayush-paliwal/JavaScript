const person={
    name:"aayush",
    gender:"male"
  }
  
  function fun1(obj){
    console.log(obj.name)
    console.log(obj.gender)
    console.log(obj.age)
  }
  
  // Parameters should have same name as name of object keys otherwise will give undefined 
  function fun2({name,gender}){
    console.log(name)
    console.log(gender)
  }
  
  fun1(person)
  console.log()
  fun2(person)