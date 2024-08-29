// Parent constructor function

function Parent(name){
   this.name=name;

}

Parent.prototype.parentMethod=function(){
    console.log('parent method');
};
// create method return the constructor property of Parent
Parent.prototype.create=function(){
    // console.log('parentcons',new this.constructor);
    return (new this.constructor);
}
// Child constructor
function Child(name,age){
    Parent.call(this,name);
    this.age=age;
};
// Child method add in prototype
Child.prototype.childMehtod=function(){
    console.log('child method');
}
// create method return constructor of Child
Child.prototype=Object.create(Parent.prototype,
    // {
    //     constructor:{
    //         value: Child,
    //         enumerable: false,
    //         writeable: true,
    //         configureable: true,
    //     }
    // }
)
Child.prototype.create=function(){
    console.log(new this.constructor);
    return (new this.constructor)
}
// calling parent mehtod

const child=new Child('child',23);
const parent=new Parent('parent')

console.log(child.create().create().create());
// console.log('parent',parent)
// console.log(child.age)