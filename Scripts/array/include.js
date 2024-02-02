const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  function isCherish(fruit){
    return fruit.name==="cherries"
  }
  const getCheris=inventory.find(isCherish)

  console.log(getCheris)