// writable object, not delete and changeable of object
const obj={};
Object.defineProperty(obj,'firstName',{
  value: 'jobayed',
  writable: true,
  enumerable: true,
})

console.log(obj);
const o={};
let mi='nai';
Object.defineProperty(o,'a',{
  get(){
    return mi;
  },
  configurable: true,// when accessor descriptor used in that time if configurable true it you can change the property value and you can add other attributes like set and enumerable etc..
});

o.a='jai'
for(const lc in o){
  console.log(lc)
}
console.log(o.a)
o.a='ok';
console.log(o)