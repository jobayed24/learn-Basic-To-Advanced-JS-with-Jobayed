const ages= Object.create(null,{
    alice: {value: 18},
    bob: {value: 20}
});

function hasPerson(name){
    console.log(name in ages);
}

function age(age){
    console.log(ages[age])
}

hasPerson('hasOwnProperty')
age('toString')