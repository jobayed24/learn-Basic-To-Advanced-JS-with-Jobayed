const str = "The quick red fox jumped over the lazy dog's back";



function lastStrAt(str){
    return str.at(-1)
}
function lastStrCharat(str){
    return str.charAt(str.length-1)
}
function spliceChar(str,start,end){
    let strValue= str.slice(start,end)
    console.log(strValue.toUpperCase())
}

console.log('lastStrAt',lastStrAt(str))
console.log('laststrChartat',lastStrCharat(str))

spliceChar(str,-4)
