// Returns array like object
const navitem=document.getElementsByTagName("a")
console.log(navitem)
console.log(navitem[1])
console.log()

// Using loops
for(let i=0;i<navitem.length;i++){
  // console.log(navitem[i])
  const item=navitem[i]
  item.style.backgroundColor="#gggg"
  item.style.color="red"  
  item.style.fontWeight="bold"  
}
             // OR
for(item of navitem){
  item.style.backgroundColor="#gggg"
  item.style.color="red"  
  item.style.fontWeight="bold" 
}

// querySelectorAll
const navall=document.querySelectorAll("a")
for(let i=0;i<navall.length;i++){
  // console.log(navitem[i])
  const item=navall[i]
  item.style.backgroundColor="#gggg"
  item.style.color="red"  
  item.style.fontWeight="bold"  
}

for(item of navall){
  item.style.backgroundColor="#gggg"
  item.style.color="red"  
  item.style.fontWeight="bold" 
}

