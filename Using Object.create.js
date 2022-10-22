const obj1 = {
    key1: "value1",
    key2: "value2"
  }
  
  const obj2 = {
    key3: "value4"
  }
  console.log(obj2.key1)      // Gives undefined
  console.log()
  
  
  // If we want to access keys of obj1 in obj2 without creating them in obj2 then we can achieve this by Object.create which is also one of the way to create objects
  
  const obj3 = Object.create(obj1)
  obj3.key4 = "value4"
  console.log(obj3.key1)
  console.log(obj3.key4)
  console.log(obj3)
  console.log(obj3.__proto__)
  console.log()
  
  
  
  
  const userMethods = {
    about: function() {
      return `${this.firstname} is ${this.age} years old`
    },
    is18: function() {
      return this.age >= 18
    }
  }
  
  function createuser(firstname, lastname, age, email) {
    const user = Object.create(userMethods)
    user.firstname = firstname
    user.lastname = lastname
    user.age = age
    user.email = email
    return user
  }
  
  const user2 = createuser("ajay", "gupta", 34, "dd@gmail.com")
  console.log(user2.about())
  const user3 = createuser("ankit", "gupta", 24, "ag@gmail.com")
  console.log(user3.about())
  
  