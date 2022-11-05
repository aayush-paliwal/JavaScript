// innerHTML
const todo=document.querySelector(".todo-list")
console.log(todo)
console.log(todo.innerHTML)

// It will replace the old contents with the new one
todo.innerHTML="<li>New Todo</li>"
// To keep the old contents intact along with adding the new one
todo.innerHTML=todo.innerHTML + "<li>New Todo 2</li>"
todo.innerHTML+="<li>Learn</li>"

// Do not use innerHTML to add more elements in the old one because it creates performance issues.
// Use innerHTML to add elements by replacing the old ones