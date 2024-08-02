function add(c,d){
  return this.a+this.b+c+d;
}

const o={a: 1,b:2}

const totalValue=add.apply(o,[10,20])// this with call method it's refer object which pass in firt argument and second argument it's expect explicit arguments with array which the function expect
console.log(totalValue)