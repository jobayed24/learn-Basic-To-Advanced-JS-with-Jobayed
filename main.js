let products =["./1.png","./2.png","./3.png","./4.png","./5.png","./6.png",]


console.log(products)

let getCarousel=document.getElementById('carousel');
let nextButton=document.getElementById('nextBtn')
let prevButton=document.getElementById('prevBtn');
let carouselView=products.slice(0,3);
function displayProducts(){
    getCarousel.innerText=''
    carouselView.forEach((item)=>{
        let motherDiv=document.createElement('div');

        let createImg=document.createElement('img');
        let createTitle=document.createElement('div');
        createTitle.innerText=item;
        createImg.src=item
        createImg.width='200';
        createImg.height='150'
        createImg.classList.add('item');
        motherDiv.appendChild(createImg)
        motherDiv.appendChild(createTitle)
        getCarousel.appendChild(motherDiv);
    })
}
displayProducts();

function nextButtonClick(){
        let getFirstProduct=products[0];
        products.shift();
        carouselView=products.slice(0,3);
        products.push(getFirstProduct);
        displayProducts()
}
function prevButtonClick(){
    let getLastProduct=products[products.length-1];
    products.pop();
    products.unshift(getLastProduct);
    carouselView=products.slice(0,3)
    displayProducts()
}
prevButton.addEventListener('click',prevButtonClick)
nextButton.addEventListener('click',nextButtonClick)
