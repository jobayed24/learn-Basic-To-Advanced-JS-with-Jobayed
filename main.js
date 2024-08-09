function Shap(name,yourAge){
    this.name=name;
    this.age=yourAge;
    console.log(`This is ${this.name}. And age is ${23} years.`)
}

// const o=new Shap('jobayed',23)

const obj=Object.create(Shap.prototype);
console.log(obj)