const wait = (ms) =>new Promise((resolve)=>setTimeout(resolve, ms))


wait(0)
    .then(()=>console.log('promise'))

    Promise.resolve()
        .then(()=>console.log('promise1'))
        .then(()=>console.log('promise2'))

        console.log('synch') //synchronous