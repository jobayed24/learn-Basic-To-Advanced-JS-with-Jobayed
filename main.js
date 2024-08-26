class Box {
    #value;
    constructor(value) {
      this.#value = value;
    }
    valueOf() {
      return this.#value;
    }
  }

  const box = new Box(23);

console.log(box+ 23)// here Box is return valueOf() as toString()
console.log(box+' hi') //here box is return toString() for value
