// 'use strict'
const obj = {
  prop() {},
  foo: "bar",
};

obj.foo='pineapple';
delete obj.prop
console.log(obj)
//seal the obj
// const o=Object.seal(obj);
// console.log(obj===o)
obj.foo='jackfruits';
console.log(obj)
console.log(Object.isSealed(obj))

delete obj.foo;
console.log(obj);

Object.defineProperty(obj,'firstName',{
  value: 'jobayed hossen',
  enumerable: true,
  configurable: true,
  writable: false
})

console.log(obj);

Object.defineProperty(obj,'firstName',{
  value: 'Rasel Hayder',
  writable: true
})
obj.firstName="Shakhawat"
console.log(obj)