//super method

function Human(name,level){
    this.name=name;
    this.level=level
}

// sub method of super class

function SuperHero(name,level){
   Human.call(this,name,level);
}
Object.setPrototypeOf(SuperHero.prototype,Human.prototype)
SuperHero.prototype.fly=function(){
    return `${this.name} is flying`;
}

const superMan=new SuperHero('Jobayed',1);

console.log(superMan)