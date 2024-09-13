const cart = ["apple", "banana", "pear"];

//return last element
console.log(cart[cart.length-2])

const getBanana=cart.slice(-2,-1);
console.log(getBanana);

console.log(cart.at(-2))