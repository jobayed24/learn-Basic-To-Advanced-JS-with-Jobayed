// define single property in object
const obj=Object.defineProperty({},'key',{
  // by default it's not enumerable ,configurable , writable
  value: 'static',
})
obj.key='dynamic';
for(const local in obj){
  console.log(local)
}
console.log(obj.key);

// define two many property with configuration
const obj1=Object.defineProperties({},{
  firstName:{
    value:'jobayed',
  },
  lastName:{
    value: 'hossen'
  }
})
for(const local in obj1){
  console.log(local)
}