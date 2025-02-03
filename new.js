const array1=[1,2,3,4];

array1.forEach( (val,index,arr)=>{
    console.log(val*3);
})

const newArr=[123,300,345,12,44,33,212];
const data=newArr.filter( (val,index,arr)=>{
    return val>100;
})
console.log(data)

const items=[{name:"TV",price:20000},{name:"R15 Bike",price:200000},{name:"BMW Car",price:15000000}]
for(let each of items){
    console.log(`${each.name} price is ${each.price}`)
}