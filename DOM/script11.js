// Static List Vs Live list

// querySelectorAll gives static list
const list=document.querySelectorAll(".nav-items li")
const li=document.createElement("li")    // Not updateed in li
li.textContent="Sign In"
const getclass=document.querySelector(".nav-items")
getclass.append(li)
console.log(list)




// getElementBySomething gives us live list
const list2=document.querySelector(".nav-items")

// list2. means get all tags name li from list otherwise without it will give all li from entire HTML
const items=list2.getElementsByTagName("li")
const li2=document.createElement("li")    // Updated in li
li2.textContent="Exit"
list2.append(li2)
console.log(items)