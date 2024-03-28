// how to make any data to array
const newArray=Function.prototype.call.bind(Array.prototype.slice)
function list(){
  return newArray(arguments)
}

console.log(list(1,2,3,4,{id: 1,rasel: "rasel"},5))