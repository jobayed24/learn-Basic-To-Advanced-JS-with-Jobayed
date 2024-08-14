//  inheritance of property but stroing value in same name which will be different in each instance

//function your name and age 

function YourNameAge(){
  Object.defineProperty(YourNameAge.prototype,'Name',{
    get(){
      return this.name;
    },
    set(value){
      this.name=value;
    },
    configurable: true,
  });
  Object.defineProperty(YourNameAge.prototype,'Age',{
    get(){
      return this.age;
    },
    set(value){
      this.age=value;
    },
    configurable: true,
  });
}
const obj1=new YourNameAge();
obj1.Name='jobayed';
obj1.Age=24;
console.log(obj1.Name);
console.log(obj1.Age);
const obj2=new YourNameAge();
obj2.Name='ohidur';
obj2.Age=56;
console.log(obj2.Name);
console.log(obj2.Age);

