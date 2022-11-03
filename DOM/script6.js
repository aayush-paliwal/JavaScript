// Inner HTML
const head=document.querySelector(".headline")
console.log(head)
console.log(head.innerHTML)
console.log()

// Changing inner HTML
head.innerHTML="<h2>Changing inner HTML</h2>"
console.log(head.innerHTML)
head.innerHTmL +="<button class=\"btn\"> Learn MORE </button>"
console.log(head.innerHTML)