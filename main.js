//concating non array object with concate

console.log(Array.prototype.concat.call({},[1,2,3]))

const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
  };

  console.log(Array.prototype.concat.call(arrayLike,3,4))