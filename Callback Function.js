// It's a convention that whenever we call a function inside a function we name it as callback

function fun1(callback){
    console.log(callback)
    console.log("Hello there")
    callback()
  }
  
  function fun2(name){
    console.log("running")
    console.log("my name is",name)
  }
  
  fun1(fun2)
  // fun1(fun2())