//find the min and max value in array unsing one funtion

function findMinMix(arr){
    arr.sort((a,b)=>a-b)
    return {min: arr[0], max: arr[arr.length-1]}
}

const numberArray=[2,3,4,8,10];

const {min,max}=findMinMix(numberArray)

console.log(max)