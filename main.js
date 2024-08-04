const obj1={a:0,b:{c:0}};

const obj2=Object.assign({},obj1);
obj1.a=1;
obj2.a = 2;
obj1.b.c=4;
obj2.b.c = 3;


console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); 

const obj3 = { a: 0, b: { c: 0 } };
const obj4=structuredClone(obj3);
obj3.a=3;
obj4.b.c=4;
console.log('obj3=',obj3,"obj4",obj4);