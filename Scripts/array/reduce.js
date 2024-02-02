const numbers = [2, 2, 2, 2, 2];

const reduceNumbers=numbers.reduce(functionNumbers,100);

function functionNumbers(total,value,index,arr){
    return total+=value;
}

console.log(reduceNumbers)