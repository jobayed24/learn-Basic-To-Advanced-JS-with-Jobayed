function resolve(result){
  console.log(result)
}

function reject(result){
  console.error(result)
}

Promise.reject(new Error('error occured'))
  .then(resolve,reject)