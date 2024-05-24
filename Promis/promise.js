//Promise all

const promise1=Promise.resolve(3);

const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve, 100,'foo');
})
const promise2=new Promise((resolve)=> {
    throw Error('error occured')
});
Promise.all([promise1,promise3,promise2,''])
    .then((values)=>console.log(values))
    .then(null,(reject)=>console.log(reject.message))