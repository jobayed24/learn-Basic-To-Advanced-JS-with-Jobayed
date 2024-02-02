const numbers = [2, 2, 2, 2, 2];

// const reduceNumbers=numbers.reduce(functionNumbers,100);
// array reduce and reduceRight are almost same work
const reduceNumber=numbers.reduceRight(functionNumbers,210)

function functionNumbers(total,value,index,arr){
    return total+=value;
}

console.log(reduceNumber)