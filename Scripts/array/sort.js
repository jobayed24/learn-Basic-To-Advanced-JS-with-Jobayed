const stringArray = ["Blue", "Humpback", "Beluga"];


///make shallow copy

const makeStirngArray=[...stringArray];
/// before sort make shallow copy cause it mutate original array

makeStirngArray.sort();

console.log(makeStirngArray);