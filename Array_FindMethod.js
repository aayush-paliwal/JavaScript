const arr = ["dell", "hp", "lenovo", "asus"]
function isLength(string) {
  return string.length === 4
}

// It will return the first string whose length is 4
const ans = arr.find(isLength)
console.log(ans)


// To return the first string whose length is 5
const ans2 = arr.find((string) => {
  return string.length === 5
})
console.log(ans2)
console.log()



// To find the user having id 3
const user = [
  { id: 1, name: "aayush" },
  { id: 2, name: "golu" },
  { id: 3, name: "sumit" },
  { id: 4, name: "arjun" },
  { id: 5, name: "ram" }
]
const a = user.find((user) => user.id === 3)
console.log(a)