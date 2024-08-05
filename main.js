// 'use strict'
const obj={
    name: 'jobayed',
    age: 26,
    maritalStatus: 'married'
};

const objWithDescriptor=Object.create({},{
    name:{
        value : 'jobayed',
        enumerable: true,
        writable: true,
        configurable: true
    },
    age: {
        value:27,
        enumerable: true,
        writable: true,
        configurable: true
    }
})

// console.log(objWithDescriptor)

// objWithDescriptor.name="khandakar";
// console.log('after modifty the obj value', objWithDescriptor)

//reassign value of age property

objWithDescriptor.age=45

delete objWithDescriptor.name;
console.log(objWithDescriptor)
// const objWithEntries=Object.entries(objWithDescriptor)
// console.log(objWithEntries)