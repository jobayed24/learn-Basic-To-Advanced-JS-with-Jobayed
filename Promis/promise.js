const wait =(ms)=>new Promise((res)=>setTimeout(res, ms))

wait(0)
    .then(()=>console.log("promise callback"))

    const wait1 =(ms)=>new Promise((res)=>setTimeout(res, ms))

    wait1(0)
        .then(()=>console.log("promise callback1"))
    
    
Promise.resolve()
    .then(()=>console.log('promise'))