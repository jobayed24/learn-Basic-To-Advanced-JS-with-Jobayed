
const o={};
let mi='nai';
Object.defineProperty(o,'a',{
  get(){
    return mi;
  },
  configurable: true,// when accessor descriptor used in that time if configurable true it you can change the property value and you can add other attributes like set and enumerable etc..
});

Object.defineProperty(o,'a',{
  set(setValue){
    mi=setValue;
  },
  enumerable: true,
})
o.a='hi'// for writable capabilty you should use setter function to reassign the object property value

console.log(o.a)