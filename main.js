// so clone a object
// structure clone or we can clone the object Object.assign

const person={
  name: 'jobayed',
  designation: 'engineer',
  occupation: {
    rol: 'solve the problem'
  },
};
Object.defineProperty(person,'hobby',{
  value: 'coding',
  enumerable: false,
});
function cloneObject(object){
  const obj={};
  Object.getOwnPropertyNames(object).forEach((props)=>{
    const pd=Object.getOwnPropertyDescriptor(object,props);
    Object.defineProperty(obj,props,pd);
   
    // obj[props]=object[props];
  });
  return obj;
}
const personCopy=cloneObject(person);
personCopy.occupation.rol='no jobs';
personCopy.name='arif';
person.name='jobayed'
console.log('personCopy',personCopy);
console.log('person',person);

console.log(Object.getOwnPropertyDescriptors(personCopy))