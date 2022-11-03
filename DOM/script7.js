// Checking the number of classes
const query = document.querySelector(".section-todo")
console.log(query)
console.log(query.classList)    // Prints the classes it have
query.classList.add("bg-dark")
console.log(query.classList)


// Removing a class
// query.classList.remove("container")


// To check if a specified class exists in the class or not
const ans = query.classList.contains("container")
console.log(ans)


// toggle: It will add the specified class if not present otherwise delete the class
query.classList.toggle("bg-dark")
query.classList.toggle("bg-dark")