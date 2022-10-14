// First of all function two will check if a variable is defined in its environment or not if it is not found then it will check in the lexical scope (here it is function one()) and if it again not found there then it will check in the lexical scope of function one()


const var1="run"
function one(){
  
  function two(){
    const var1 = "go"
    console.log("Inside one",var1)
  }
  
  console.log(var1)
  two()
}

one()
console.log(var1)
console.log()


const var2="left"
function three(){
  
  function four(){
    const five= () => {
      console.log("Inside four",var2)
    }
    five()
  }
  
  console.log(var2)
  four()
}

three()