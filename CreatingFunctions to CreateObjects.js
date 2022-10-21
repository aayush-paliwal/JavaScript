// const user1={
//   firstname:"aayush",
//   lastname:"paliwal",
//   age:23,
//   email:"abc@gmail.com",
//   about:function(){
//     return `${this.firstname} is ${this.age} years old`
//   },
//   is18:function(){
//     return this.age >= 18
//   }
// }


function createuser(firstname,lastname,age,email){
    const user={}
    user.firstname=firstname
    user.lastname=lastname
    user.age=age
    user.email=email
    user.about=function(){
      return `${this.firstname} is ${this.age} years old`
    }
    user.is18=function(){
      return this.age >= 18
    } 
    return user
  }
  
  const user2=createuser("ajay","gupta",34,"dd@gmial.com")
  console.log(user2.age)
  const about=user2.about()
  console.log(about)