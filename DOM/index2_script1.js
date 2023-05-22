// Printing Root Nodes
const rootnode = document.getRootNode()
console.log(rootnode)


// Printing Child Nodes
console.log(rootnode.childNodes)    // Gives array like object therefore indexing can be done
const htmlEle = rootnode.childNodes[0]
console.log(htmlEle)
console.log(htmlEle.childNodes)
const headEle = htmlEle.childNodes[0]
console.log(headEle)


// Printing parent Node
console.log(headEle.parentNode)


// Printing sibling node
console.log(headEle.nextSibling)
console.log(headEle.nextElementSibling)


// Reaching from child to parent and changing color
const h1 = document.querySelector("h1")
console.log(h1)
const parent = h1.parentNode.parentNode
console.log(parent)
parent.style.color = "#efefef"
parent.style.backgroundColor = "#333"


// Directly selecting body
const body = document.body
console.log(body)
