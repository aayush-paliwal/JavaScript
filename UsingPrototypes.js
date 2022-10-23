// const userMethods={
//   about:function(){
//     return `${this.firstname} is ${this.age} years old`
//   },
//   is18:function(){
//     return this.age >= 18
//   } 
// }

function createuser(firstname, lastname, age, email) {
    // Below statement is setting up the proto of user to createuser.prototype
    const user = Object.create(createuser.prototype)
    user.firstname = firstname
    user.lastname = lastname
    user.age = age
    user.email = email
    return user
  }
  
  createuser.prototype.about = function() {
    return `${this.firstname} is ${this.age} years old`
  }
  createuser.prototype.is18 = function() {
    return this.age >= 18
  }
  const user2 = createuser("ajay", "gupta", 34, "dd@gmail.com")
  console.log(user2.about())
  const user3 = createuser("ankit", "gupta", 24, "ag@gmail.com")
  console.log(user3.about())  