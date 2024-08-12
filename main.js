// define object

const o={};

Object.defineProperty(o,'a',{
  value: 37,
  enumerable: true,
  writable: true,
  configurable: true,
})
console.log(o);
let bValue=23;
Object.defineProperty(o,'b',{
  value=23,
  get(){
    return bValue;
  },
  set(propValue){
    bValue=propValue;
  },
  enumerable: true,
  configurable: true,
});

// o.b(23);

o.b=44;
console.log(o.b)
