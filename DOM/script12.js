// Events 
// click Event

const button=document.querySelector(".btn-headline")
console.log(button)
function clickme(){
  console.log("You clicked on the button")
}
// button.addEventListener("click",clickme)
           // OR
// button.addEventListener("click",function(){
//   console.log("You clicled on the button")
// })
          // OR
button.addEventListener("click",()=>{
  console.log("Arrow function")
})