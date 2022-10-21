// Methods : Function inside objects

const person={
    name:"piyush",
    age:34,
    about:function(){
      console.log("name is aayush and age is 34")
      // console.log(`name is ${name} and age is ${age}`)
      console.log(this)
      console.log(`name is ${this.name} and age is ${this.age}`)
    }
  }
  console.log(person.about)
  person.about()
  console.log()
  
  
  function info(){
    console.log(`name is ${this.name} and age is ${this.age}`)
  }
  const person1={
    name:"alex",
    age:34,
    about:info   
  }
  const person2={
    name:"roy",
    age:34,
    about:info   
  }
  const person3={
    name:"root",
    age:34,
    about:info   
  }
  person1.about()
  person2.about()
  person3.about()