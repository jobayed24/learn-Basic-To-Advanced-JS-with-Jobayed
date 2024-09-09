
const unbound=Array.prototype.slice;

const boundArray=Function.prototype.call.bind(unbound)

function logArguments(){
    const arr=boundArray(arguments);
    console.log('arguments are',arr);
}

logArguments(1,2,'jk','tanvir')