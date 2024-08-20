//security ensure and validity checks

function SecurEntity(){};

let secureObj=Object.create(SecurEntity.prototype);

function performSecurOpearation(ob){
    if(SecurEntity.prototype.isPrototypeOf(ob)){
        console.log('operation allowed');
    }else{
        console.log("Opration not allowed")
    }
}

performSecurOpearation(secureObj);
// performSecurOpearation({})

