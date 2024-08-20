'use strict'
const employee = {
    name: "Mayank",
    designation: "Developer",
    address: {
      street: "Rohini",
      city: "Delhi",
    },
  };

  
deepFreez(employee);
employee.address.city="dhaka";
console.log(employee.address.city)
// define a function which help freez a object recursively cause object.freez works for object immediate property if the property it's a object then it's doesn't work 
function deepFreez(obj){
    Object.getOwnPropertyNames(obj).forEach((key)=>{
        if(obj[key].constructor.name==='Object'){
            if(obj[key]==='window'){
                return;
            }
            deepFreez(obj[key])
        }
    })
   return Object.freeze(obj)
}

