// constructor function
function Human(name,category){
  this.name=name,
  this.category=category
}

//set toString value
Human.prototype.toString=function(){
  return `${this.name} category name ${this.category}`
};

const v1=new Human('jobayed','men');
const v2=Human.bind(null);
console.log(new v2('tushar','women').toString())
console.log(v1.toString())