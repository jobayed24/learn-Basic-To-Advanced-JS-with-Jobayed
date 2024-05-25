let isLoading = true;
const fetchdata =async(url)=>{
  const reponse=await fetch(url);
  return reponse;
}
fetchdata(`https://dummyjson.com/products`)
  .then((response)=>{
      const contentType= response.headers.get('Content-Type')
      if(contentType && contentType.includes('application/json')){
        return response.json();
      }else{
        new Error('we are not getting json object')
      }
  })
  .then((json) => {
      console.log(json)
  })
  .catch((error) => {
    console.error(error); // this line can also throw, e.g. when console = {}
  })
  .finally(() => {
    isLoading = false;
  });
