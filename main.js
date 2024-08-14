// inheritance of property

function Myclass(){
  // it's look like a global variable access the value in different object ...
  let fName='jobayed';
  let lName='hossen';
  Object.defineProperty(Myclass.prototype,'firstName',{
    get(){
      return fName;
    },
    set(value){
      fName=value;
    },
    configurable: true
  });
  Object.defineProperty(Myclass.prototype,'lastName',{
    get(){
      return lName;
    },
    set(value){
      lName=value;
    },
    configurable: true
  });
};

const obj1=new Myclass();
const obj2=new Myclass();

obj1.firstName='ohidur rahman';
console.log(obj2.firstName)