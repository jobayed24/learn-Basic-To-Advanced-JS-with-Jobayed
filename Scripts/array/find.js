const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
let getCherries="cherries"
function isFound(ele){
    return ele.name===getCherries;
}

  const found=inventory.find(isFound)

  console.log(found)