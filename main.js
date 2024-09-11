function Myarray(){}

Object.defineProperty(Myarray,Symbol.hasInstance,{
    value(instance){
        return Array.isArray(instance);
    }
})

console.log([] instanceof Myarray)