const userMethods = {
    about: function() {
      return `${this.firstname} is ${this.age} years old`
    },
    is18: function() {
      return this.age >= 18
    }
  }
  
  function createuser(firstname, lastname, age, email) {
    const user = {}
    user.firstname = firstname
    user.lastname = lastname
    user.age = age
    user.email = email
    user.about = userMethods.about   // Storing reference of about here
    user.is18 = userMethods.is18
    return user
  }
  
  const user2 = createuser("ajay", "gupta", 34, "dd@gmail.com")
  console.log(user2.about())
  const user3 = createuser("ankit", "gupta", 24, "ag@gmail.com")
  console.log(user3.about())  