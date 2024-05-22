const ingredients=[];

function doSomething(url){
    const promise= new Promise((resolve)=>resolve(url))
    return promise
}
const dataFetch=async (result)=>{
    const response=await fetch(result);
    const datas= await response.json();
    return datas
}
doSomething('https://dummyjson.com/products')
    .then(async(result)=>{
           return dataFetch(result)  // to get the value in second callback or promise must return previous promise
                .then((datas)=>datas.products)
                .then((products)=>{
                    ingredients.push(...products)
            })
        
    })
    .then((data)=>console.log(ingredients))

    // console.log(ingredients)