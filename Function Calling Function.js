function fun1(){
    function hello(){
      console.log("Hello..")
    }
    return hello
  }
  
  const ans=fun1()
  console.log(ans)
  ans()