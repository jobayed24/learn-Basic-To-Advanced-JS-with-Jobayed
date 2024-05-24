const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const p5 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });
  
  // Using .catch:
  //set error function to handle error 

  Promise.all([p1.catch((error)=>error), p2.catch((error)=>error), p3.catch((error)=>error), p4.catch((error)=>error), p5.catch((error)=>error)])
    .then((values) => {
      values.forEach((values)=>console.log(values))

    })
   
  
  // Logs:
  // "reject"
  