const products = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6"];
let carouselView=products.slice(0,3);
const carouselContainer=document.getElementById('carousel');
const nextButton=document.getElementById('nextBtn');
const prevButton=document.getElementById('prevBtn');
function disPlayProducts(){
    carouselContainer.innerText=''
    carouselView.forEach((product)=>{
        const div=document.createElement('div');
        div.classList.add('items')
        div.innerText=product;
        carouselContainer.appendChild(div);
    })
    
}

function nextProduct(){
    let rememberPrevProduct=products[0];
    products.shift();
    carouselView=products.slice(0,3);
    products.push(rememberPrevProduct);
    disPlayProducts()
    
}
function prevProduct(){
    let rememberNextProduct=products[products.length-1];
    console.log(rememberNextProduct)
    products.pop();
    products.unshift(rememberNextProduct)
    carouselView=products.slice(0,3);
    disPlayProducts()
    
}
nextButton.addEventListener('click',nextProduct)
prevButton.addEventListener('click',prevProduct)

disPlayProducts();
