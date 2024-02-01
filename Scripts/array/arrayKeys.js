

const arr = ["a", , "c"];
// object.keys gives key of array remove hole from array
const getArrayValue=Object.keys(arr);

// let text="";
// for(x of getArrayValue){
//     text+=x;
// }

console.log(getArrayValue)