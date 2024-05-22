function saySomthing(data){
    console.log(data)
    throw Error('there is an error')
    
}

setTimeout(() => {
    saySomthing('hello jobayed')
}, 5*1000);