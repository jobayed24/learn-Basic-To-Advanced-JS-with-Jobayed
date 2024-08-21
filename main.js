const object1 = { a: 1, b: 2, c: 3 };

const objDuble=Object.entries(object1).map(([key,value])=>{
    if(value>2){
        return [key,value*6]
    }
});
// const filterOut=objDuble.filter((value)=>value.is)
console.log((objDuble));

objDuble.filter((value)=>{
    if(value===undefined){
       
    }
})