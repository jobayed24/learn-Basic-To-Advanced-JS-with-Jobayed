async function fetchAndDecode(id) {
    const res = await fetch(`https://dummyjson.com/products`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.products
  }
  
  const product1 = fetchAndDecode();
  // const product2= fetchAndDecode(2)

  
  Promise.any([product1])
        .then((products) => {
          console.log(products)
            products.map((product)=>{
                
            const image = document.createElement("img");
            image.src = product.thumbnail;
            image.alt = product.title;
            document.body.appendChild(image);
            })
            // const objectURL = URL.createObjectURL(product.thumbnail);
         
        })
    .catch((e) => {
      console.error(e.message);
    });
  