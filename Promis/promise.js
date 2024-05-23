const debo=true;

const promis=new Promise((resovle,reject)=>{
    if(debo){
        resovle('এই নে কলম')
    }else{
        reject('না আমি দেব না')
    }
})

promis.then((kolom)=>{
    console.log(kolom)
    return 'এখন খাতায় লেখ'
}).then((result)=>{
    console.log(result)
    console.log('আচ্ছা লিখতেছি')
}).catch((error)=>console.log(error))

console.log('synchronous call')