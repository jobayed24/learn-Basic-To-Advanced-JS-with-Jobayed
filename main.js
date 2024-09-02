// write a utility function with the goal of returning the array's lowest value and height.

function lowAndHeightValue(arr){
    let minValue=Math.min.apply(null,arr)
    let heightValue=Math.max.apply(null,arr);
    return [minValue,heightValue];
}
const arr=[12,444,-10];
const [min,height]=lowAndHeightValue(arr);
console.log(min,height)