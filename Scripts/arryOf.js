let fruits=["Banana", "Orange", "Apple", "Mango","Graps"];
/// array.from method take two paramenter one is array secondis mapfn where mapfn is travers every element of array 

//if i need to add something new with array element then we can use it and it return new array 

// which is shallow copy it's mean it takes referenc of main array
let getFromFruits=Array.from(fruits,(x)=>x+"jk");

console.log(getFromFruits)