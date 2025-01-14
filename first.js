const array=["cricket","hockey","swimming"];
for (let each of array){
    console.log(each);
}let result=array.map((data)=>{
    return "play: "+data;

})
console.log(result);

for (let eachEl of array){
    console.log("games: "+eachEl)
}

let array2=["food","lunch"];
let array3=array2.slice();
array2.push("dinner");
console.log(array2);
console.log(array3);


let array4=[...array2,"jeelan","javeed"]; // spread operator
console.log(array4);

let obj={
    name:"Jeelan",
    age:23,
}
let data1={
    ...obj,
    gender:"Male",
    course:"CSE"

}
console.log(data1);

function sum(...args){//rest parameter used to pack values into array
    let result=args.reduce((num1,num2)=>{
        return num1+num2;
    })
    return result;
}
console.log(sum(1,2,3,4,5,6));


const market={
    stock:"Airtel"
}
const lpu=market.stock;
console.log(lpu);

const person={
    name:"Jeelan Basha"
}
console.log(person.name)

//Array destructing 
const array_1=["jeelan","Javeed"];
const [item1,item2]=array_1;

console.log(item1,item2)


let func_1=function(a,b){ // Using function expression
    return a*b;
}
console.log(func_1(12,10));

const obj2={
    name:"Jeelan",
    age:23
}
const fe3={...obj2,age:34};
console.log(fe3);
console.log(obj2)