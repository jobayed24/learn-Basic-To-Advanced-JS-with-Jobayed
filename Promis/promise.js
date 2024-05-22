
function saySomething(resolve){
    // throw Error('there was an error')
    console.log(resolve)
    
}
const wait=(ms)=> new Promise((resolve)=>setTimeout(resolve, ms))

wait(3*1000)
    .then(()=>saySomething('hey this is jobayed'))
    .catch((err)=>console.log(err))