const arr = ["a", , "c"];

const getArrayValue=arr.keys(arr);

let text="";
for(x of getArrayValue){
    text+=x;
}

console.log(text)