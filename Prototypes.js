function fun() {
    console.log("Hello....")
  }
  
  // JavaScript function ==> function + Object
  
  console.log(fun.name)       // Prints name of function
  
  // We can also add our own properties to the function
  fun.ownProperty = "new property"
  console.log(fun.ownProperty)
  console.log()
  
  
  // Functions provide us prototypes or we can say an empty objects and we can add our own property in that prototype
  console.log(fun.prototype)
  
  fun.prototype.abc = "abc"
  fun.prototype.xyz = "xyz"
  fun.prototype.sport = function() {
    return "football"
  }
  
  console.log(fun.prototype)
  console.log(fun.prototype.sport())