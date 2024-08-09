// how actually you can inherite the constructor property and 
// method

//Super Parent
function Parent(){}
Parent.prototype.callYourName=function(name){
    console.log(`this is your name ${name}`)
}
console.log(new Parent())
// Child constructor 
function Child(){}
Child.prototype=Object.create(Parent.prototype);
console.log(new Child())
// new Parent().callYourName('jobayed')