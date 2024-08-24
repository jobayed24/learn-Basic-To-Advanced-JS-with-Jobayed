const object1 = {};
object1.property1='value1';
const getOwndes=Object.getOwnPropertyDescriptors(object1);
console.log(getOwndes);
Object.preventExtensions(object1);
console.log('after',Object.getOwnPropertyDescriptors(object1));
object1.name='jobayed';
console.log(object1)

