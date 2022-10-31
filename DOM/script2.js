// Changing inner text:  1)textContent        2)innerText

// It will also give hidden text
const mainHeading=document.getElementById("main-heading")
console.log(mainHeading.textContent)
// mainHeading.textContent="New Tasks"
// console.log(mainHeading.textContent)
console.log()


// It will not give the hidden text
const main2=document.getElementById("main-heading")
console.log(main2.innerText)
document.getElementById("main-heading").innerText="New Txt "
console.log()



// Changing styles of elements
// const main3=document.querySelector("div")    // Gives first div


// Gives div which has a class headline and inside from which gives h2 (Space for looking inside of headline)
const main3=document.querySelector("div.headline h2") 
// console.log(main3.style)      // Gives whatever style it has get

main3.style.color="red"
main3.style.backgroundColor="pink"
main3.style.border="2px solid red"