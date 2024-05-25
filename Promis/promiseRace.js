
const stateCondiion=(promise)=>{
  // console.log(promise)
  const pendingState={status: 'pending'}
 return Promise.race([promise,pendingState])
    .then((value)=>
      // console.log(value)
      value==pendingState ? value : {status: 'fulfiled',value}
    ,(reason)=>
      ({status: 'rejected',reason}))
   
}
const p1=new Promise((resovle)=>setTimeout(resovle, 100,'promise1'))
const p2=new Promise((resovle)=>setTimeout(resovle, 200,'promise2'))
const p3=new Promise((resovle,reject)=>setTimeout(reject, 100,'promise3'))


async function callFunction(){
 console.log( await stateCondiion(p1))
 console.log( await stateCondiion(p2))
 console.log( await stateCondiion(p3))

}

console.log('initial state');
callFunction();

setTimeout(() => {
  console.log('after 100ms')
  callFunction()
}, 100);

setTimeout(() => {
  console.log('after 200 ms')
  callFunction()
}, 200);