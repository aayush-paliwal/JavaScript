// Call 

const user1 = {
    name: "aayush",
    age: 14,
    about: function(hobby, favSport) {
      console.log(this.name, this.age, hobby, favSport)
    }
  }
  const user2 = {
    name: "monu",
    age: 20
  }
  
  // We want to call about function for user2 from user1 object
  // Here this refers to user2 for the about method in user1
  user1.about.call(user2)
  user1.about.call(user2, "playing", "cricket")
  user1.about.call()       // Gives undefined
  console.log()
  
  
  
  // Apply
  user1.about.apply(user1, ["reading", "football"])
  console.log()
  
  
  // Bind
  // Bind returns a function
  const func = user1.about.bind(user1, "sleeping", "chess")
  func()
  