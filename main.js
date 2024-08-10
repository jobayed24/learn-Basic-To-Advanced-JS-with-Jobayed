// null object which do not inherit properties

const obj=Object.create(null);
obj.name='jobayed';
console.log(Object.hasOwn(obj,'name'))