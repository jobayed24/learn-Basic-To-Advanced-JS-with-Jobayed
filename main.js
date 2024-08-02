function add(c,d){
  return this.a+this.b+c+d;
}

const o={a: 1,b:2}

const totalValue=add.call(o,10,20)
console.log(totalValue)