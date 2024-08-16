// converting an object to a map
// map constructor accept iteable of entries

const obj = { foo: "bar", baz: 42 };
const objMap=new Map(Object.entries(obj));
console.log(objMap);

//iterating through  a map
// using array destructuring you can iterate through object easily

const obj1 = { a: 5, b: 7, c: 9 };
// using for of loop
for(const [key,value] of Object.entries(obj1)){
  console.log(value)
}

// using array method

Object.entries(obj1).forEach(([key,value])=>{
  console.log(`the key is ${key} and value is ${value}`)
})

