function myDisplayer(some){
    document.getElementById('demo').innerText=some
}

function mySum(a,b,callback){
    let sum= a+b;
  setTimeout(() => {
    callback(sum)
  }, 2000);
  throw Error('there are an error')

}


let value=mySum(5,6,myDisplayer)
