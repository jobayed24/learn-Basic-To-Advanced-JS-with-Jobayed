// 'use strict'
const obj=Object.defineProperty({},'foo',{
    value: 1,
    writable: false,
})
// obj.foo="2"
// copy multiple object resource to obj object
Object.assign(obj,{bar:2},{foo1:'foo1',foo2:'foo2',foo3: 'foo3'},{foo:'this is foo'},{foo6: 'foo6'});
console.log(obj)

//......Note.....

//Copy task executed properly untile get error with assign value in read only property