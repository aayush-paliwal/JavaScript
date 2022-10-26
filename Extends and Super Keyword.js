class animal{
    constructor(name,age){
      this.name=name
      this.age=age
    }
  
    eat(){
       return `${this.name} is eating`
    }
    issupercute(){ 
      return this.age <= 1
    }
    iscute(){
      return true
    }
  }
  
  const animal1= new animal("Jerry" , 1)
  console.log(animal1)
  console.log(animal1.eat())
  console.log(animal1.iscute())
  console.log()
  
  
  // dog is subclass and animal is parent class
  class dog extends animal{
    constructor(name,age,speed){
      super(name,age)        
      this.speed=speed
    }
  
    run(){
      return `${this.name} is running at speed of ${this.speed}kmph`
    }
  }
  
  const dog1=new dog("Pluto",2,42)
  console.log(dog1)
  console.log(dog1.run())