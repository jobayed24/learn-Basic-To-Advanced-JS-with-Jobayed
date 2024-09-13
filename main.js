const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };

  console.log(Array.prototype.at.call(arrayLike,0))