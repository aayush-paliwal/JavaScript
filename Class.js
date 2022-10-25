class createUser{
    constructor(firstname,lastname,age,email){
      this.firstname=firstname
      this.lastname=lastname
      this.age=age;
      this.email=email
    }
  
    about(){
      return `${this.firstname} is ${this.age} years old`
    }
    is18(){
      return this.age >= 18
    }
  }
  
  const user1=new createUser("aayush","paliwal",23,"abc")
  const user2=new createUser("sumit","verma",24,"dgg")
  console.log(user1.name)
  console.log(user2.is18())
  console.log(Object.getPrototypeOf(user1))