const brand=["hp","dell","lenovo","apple","MSI"]
brand.sort()
console.log(brand)
console.log()



const num=[6,4,8,3,5,12,22]
// num.sort()                    // Will change original array

console.log(num)            
 // Gives weired result because javascript is not sorting the array as numbers,it is soring it as a string
// ["6","4","8","3","5","12","22"]

num.sort((a,b)=>{
  return a-b
})
console.log(num)
console.log()



const products=[
  {id:1,name:"p1",price:500},
  {id:2,name:"p2",price:330},
  {id:3,name:"p3",price:280},
  {id:5,name:"p4",price:5060},
  {id:5,name:"p5",price:510}
]
products.sort((a,b)=>{
  return a.price-b.price
})
console.log(products)
