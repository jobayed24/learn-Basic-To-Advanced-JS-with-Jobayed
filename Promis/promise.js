const data = Promise.race([
  fetch("https://dummyjson.com/products/1"),
  new Promise((resolve, reject) => {
    // Reject after 5 seconds
    setTimeout(() => reject(new Error("Request timed out")), 5000);
  }),
])
  .then(async(res) => {
    const data=await res.json();
    console.log(data)
  })
  .catch((err) => console.log(err));
