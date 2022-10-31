// Selecting element by id
// Only works for id
// Returns an object
const heading=document.getElementById("main-heading")
console.log(heading)
console.log()

// Selecting element by query selector
// Works for anything (id,class)
// # for id   and . for class
const head=document.querySelector("#main-heading")
console.log(head)
console.log()

// Selecting class
const header=document.querySelector(".header")
console.log(header)
console.log()

// It will give the first class whose name is "nav-item" and will ignore the rest
const navItem=document.querySelector(".nav-item")
console.log(navItem)
console.log()

// To select all classes having name "nav-item"
const navItemAll=document.querySelectorAll(".nav-item")
console.log(navItemAll)