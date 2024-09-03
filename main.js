//
function list(...args){
  return args;
}

function addArguments(arg1,arg2){
  return arg1+arg2;
}

const listBound=list.bind(null,37);
const addBound=addArguments.bind(null,30);
console.log(addBound(12,100))
console.log(listBound(1,3,5))