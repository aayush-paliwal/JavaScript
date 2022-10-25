function createuser(name, age) {
    this.firstname = name
    this.age = age
  }
  
  createuser.prototype.about = function() {
    console.log(this.firstname, this.age)
  }
  
  const user1 = new createuser("sumit", 32)
  user1.about()
  console.log()
  
  // new keyword does this
  // 1) create empty object and places it equal to this={}
  // 2) returns object this
  // 3) Do the work of this line: const user1= Object.create(createuser.prototype)
  
  
  
  function createuser(firstname, lastname, age, email) {
    // this = {}      // Internally new do this
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.email = email
    return this
    // return user   // No need to write this statement because new keyword automatically returns
  }
  
  createuser.prototype.about = function() {
    return `${this.firstname} is ${this.age} years old`
  }
  createuser.prototype.is18 = function() {
    return this.age >= 18
  }
  const user2 = new createuser("ajay", "gupta", 34, "dd@gmail.com")
  console.log(user2.about())
  const user3 = new createuser("ankit", "gupta", 24, "ag@gmail.com")
  console.log(user3.about())  
  