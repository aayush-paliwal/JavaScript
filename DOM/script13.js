const button=document.querySelector(".btn-headline")
button.addEventListener("click",function(){
  console.log("print")
  console.log("value of this is")
  console.log(this)    // Value of this will be the button itself
})


button.addEventListener("click",()=>{
  console.log("print")
  console.log("value of this is")
  console.log(this)      // Value will be different
})