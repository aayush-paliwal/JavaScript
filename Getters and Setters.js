class person{
    constructor(firstname,lastname,age){
      this.firstname=firstname
      this.lastname=lastname
      this.age=age
    }
    get fullname(){
      return `${this.firstname} ${this.lastname}`
    }
    setname(firstname,lastname){
      this.firstname=firstname
      this.lastname=lastname
    }
    set fullname(fullname){
      const [firstname,lastname]=fullname.split(" ")
      this.firstname=firstname
      this.lastname=lastname
    }
  }
  
  const person1=new person("aayush","paliwal",34)
  // Before using get before function name
  console.log(person1)
  // console.log(person1.fullname)     // Gives function
  // console.log(person1.fullname())    // Gives output
  
  // To call the function like a property we will use get before function name
  
  // After using get before function name
  console.log(person1.fullname)     // Gives output
  // console.log(person1.fullname())    // Gives error
  console.log()
  
  
  // To change the name of the person creating the object
  person1.setname("shivam","sharma")
  console.log(person1)
  console.log()
  
  person1.fullname="Rohit sharma"
  console.log(person1.fullname)
  