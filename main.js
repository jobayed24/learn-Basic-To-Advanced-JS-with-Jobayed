// bind function call the function explicitly

const person={
    name: 'jobayed',
    role: 'developer',
    age: 23,
    getName:function(welcome,ourSite){
        return `${welcome} ${this.name} at ${ourSite}`
    }
};

const personName=person.getName.bind(person); // getName is standAlone function which bound the function with person object

console.log(personName('Good After noon','my plateform'))