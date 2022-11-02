// get and set attributes
// Gives first anchor tag
const select=document.querySelector("a")
console.log(select)
console.log(select.getAttribute("href"))    // Gives value of specified attribute 
console.log(select.getAttribute("href").slice(1))     // If we only want Home not #Home 

select.setAttribute("href","https://www.youtube.com/")
console.log(select.getAttribute("href"))
console.log()

const inputEle=document.querySelector(".form-todo input")
console.log(inputEle)
console.log(inputEle.getAttribute("type"))
