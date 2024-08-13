// non configurable but writable propery
const o={};
Object.defineProperty(o,'a',{
  writable: true,
  configurable: false,
})

Object.defineProperty(o,'a',{
  value: 'hi'
});
console.log(o.a);

// toggle the writability
Object.defineProperty(o,'a',{
  writable: false,
})
// once the writabilty capabity has gone than there is no way to restore the capabity.
Object.defineProperty(o,'a',{
  writable: true
});
o.a='another';
console.log(o.a)