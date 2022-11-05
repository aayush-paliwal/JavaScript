// To add new elements use these methods
// document.createElement()
// append         prepend          remove

const todo=document.querySelector(".todo-list")

const newtodo=document.createElement("li")     // Creating element
console.log(newtodo)

const todotext=document.createTextNode("Click")   // Creating text
newtodo.append(todotext)    // Adding to the element 
              // OR
newtodo.textContent="text"

todo.append(newtodo)            // Updating todo-list element

// Similarly prepend : It will add element at starting whilw append adds at the last



// To remove an element 
const rem=document.querySelector(".todo-list li span")
console.log(rem)
rem.remove()


// After and before
const todo2=document.querySelector(".todo-list")
const todotext2=document.createElement("li")
todotext2.textContent="Teach"
todo2.before(todotext2)
// todo2.after(todotext2)
 


