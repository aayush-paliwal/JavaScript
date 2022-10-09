let a = prompt("Enter your Number:")
console.log(typeof a)
a = Number.parseInt(a)    // Converting string to number
console.log(typeof a)

// If any the condition get execute then it will not look on other conditions

if (a > 0) {
  console.log("this is a positive number")
}
else if (a > 4) {
  console.log("Number greator than 4")
}
else if (a == 0) {
  console.log("You entered zero")
}
else {
  console.log("this is a negative number")
}

// Ternary Operator
console.log("Number is !!!!!", (a > 0 ? "Positive" : "Negative"))