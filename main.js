const obj={
    name:'jobayed',
    number: 123n,
};

const jsString=JSON.stringify(obj,(key,value)=>{
  return typeof value==='bigint' ? value.toString()+'n' : value;
});
console.log(jsString)
const jsParse=JSON.parse(jsString,(key,value)=>{
    return typeof value==='string' && value.endsWith('n') ? BigInt(value.slice(0,-1)) : value  ;
})


console.log(jsParse)

const lv="123n";
console.log(BigInt(lv.slice(0,-1)))