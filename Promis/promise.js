function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 2000);
    });
  }
function doSomethingElse(newResult){
    return new Promise((resolve)=>{
        throw Error('there was an error occured')
        resolve(newResult)
    })
}
doSomething()
    .then((result)=> doSomethingElse(result))
    .then((newResult)=>console.log(newResult))
    .then(null,function(error){
        console.log(error.message)
    })