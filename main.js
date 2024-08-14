// when we assign value in prototype chain then it will store the value in prototype but when in same name we assign the value in object then it store in object not  prototype chain that's it...
function MyName(){
  MyName.prototype.fname='jobayed';
  Object.defineProperty(MyName.prototype,'name',{
    value: 'ohidur',
    writable: true,
  })
}

const obj1=new MyName();
console.log(obj1)
console.log(obj1.fname);
obj1.fname='hossain';
console.log(obj1.fname);
console.log(obj1.name);
obj1.name='tanvir';
console.log(obj1.name)