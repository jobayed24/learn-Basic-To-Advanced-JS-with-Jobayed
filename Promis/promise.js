//Promise all

const promise1=Promise.resolve(3);

const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve, 100,'foo');
})
const promise2=new Promise((resolve)=> {
    throw Error('error occured')
});
Promise.allSettled([promise1,promise3,promise2,''])
    .then((values)=>{
        values.forEach((value)=>{
            if(value.status=="fulfilled"){
                console.log('fulfiled value')
            }else if(value.status=='rejected'){
                console.log(value.reason.message)
            }
        })
    })
   