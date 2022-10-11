let a = "  strings  "

// To remove extra spaces in string
console.log(a.length)
// This function will not change original string but gives a new string
console.log(a.trim())
console.log(a.length)

// For changing original string
a=a.trim()
console.log(a.length)


// To change string to uppercase
let b = "reading"
console.log(b.toUpperCase())
console.log(b)    // Not change original


// To change string to lowercase
let c = "ReADing"
console.log(c.toLowerCase())
console.log(c)   // Not change original


// Slicing of string
let name = "aayush"
console.log(name.slice(0, 4))   
console.log(name)    // Not change original
console.log(name.slice(-6,-1))       // slice(start,stop)

let name2="paliwal"
console.log(name2.substring(2,6))
console.log(name2.substring(-3,-5))       // Start and end values less than 0 are treated as 0

let name3="javascript"
console.log(name3.substr(3,5))     // In this method second parameter specifies the length of extracted part
console.log(name3.substr(-4,6))     // Negative means start from end


// String to number
let num = "43"
console.log(typeof (num))
num = +num
// OR
num = Number(num)
console.log(typeof (num))


// Number to string
let num2 = 34
console.log(typeof (num2))
num2 = num2 + " "
// OR
num2 = String(num2)
console.log(typeof (num2))

// Replacing string content
let text="Please visit Microsoft! Microsoft"
text=text.replace("Microsoft","Amazon")   // replaces only the first match
console.log(text)

text=text.replace(/Microsoft/g,"Amazon")  // To replace all matches use /g
console.log(text)

text=text.replace(/MICROSOFT/i , "Amazon")  // To replace case insensitive but it don't replace all
console.log(text)


// Extracting String Characters
let fruit="apple"
console.log(fruit.charAt(3))
       // OR
console.log(fruit[3])


// Converting a String to an Array
let fruit2="mango"
arr=fruit2.split("")
console.log(arr)

let fruit3="banana,orange,grapes"
arr2=fruit3.split(",")      // Split on commas
console.log(arr2)


// To return index of first occurence of specified text
let str="control"
console.log(str.indexOf("o"))
console.log(str.indexOf("o",2))   // second parameter specifies starting position

// returns index of the last occurrence of a specified text
console.log(str.lastIndexOf("r"))
console.log(str.lastIndexOf("o",2))


// To search a string for a specified value and returns the position
console.log(str.search("t"))

// returns true if a string contains a specified value
console.log(str.includes("c"))

// returns true if a string begins with a specified value
console.log(str.startsWith("o"))


