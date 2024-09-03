class Base {
  static baseProp = "base";
}

class Derived extends Base {
  static derivedProp = "derived";
}

class AnotherDerived extends Derived{
  static anotherDeriveProp='another derived'
}
const and=AnotherDerived.bind(null);
console.log(and.anotherDeriveProp)
console.log(and.derivedProp)
console.log(and.baseProp)