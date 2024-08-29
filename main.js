function Parent(){}

Parent.prototype.callName=function(){
    console.log(new this.constructor);
}

function Child(){
    Parent.call(this);
}

Child.prototype.callName=function(){
    console.log(new this.constructor);
    return (new this.constructor);
}

Object.setPrototypeOf(Child.prototype,Parent.prototype);

new Child().callName().callName()