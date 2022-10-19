const arr=["item1","item2","item3"]

// To delete array element 
// (index,no of element to delete,item to insert )
const deleteditem=arr.splice(1,1)    
console.log(arr)           // Changes original array
console.log(deleteditem)        // To get deleted item
console.log()

// To insert element
arr.splice(1,0,"new item")
console.log(arr)
console.log()


// Deleting and inserting at same time
arr.splice(2,1,"red","blue")
console.log(arr)
