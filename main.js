function Animal() {}
function Mammal() {}
function Dog() {}

Mammal.prototype=Object.create(Animal.prototype);
Dog.prototype=Object.create(Mammal.prototype);

let myDog=new Dog();

console.log(Dog.prototype.isPrototypeOf(myDog));