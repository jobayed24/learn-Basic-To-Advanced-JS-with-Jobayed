const person = {
  name: "Alice",
  details: {
    age: 30,
    gender: "female"
  }
};
// making function for deep freez..

function deepFreez(object){
  const personProperty=Object.getOwnPropertyNames(object);

  for(const obProperty of personProperty){
    const value=object[obProperty];

    if(value && typeof value==='object'){
      deepFreez(value)
      
    }
  }
  return Object.freeze(object)
}


deepFreez(person);

console.log(person.details)
