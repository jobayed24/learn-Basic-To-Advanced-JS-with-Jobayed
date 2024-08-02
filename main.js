function outerFunction(){
  console.log('enter outserFunction')
  const outerVariable='I am in outside !';
  function innerFunction(){
    console.log('enter innerFunction');
    console.log(outerVariable);
     
  }
  console.log('ending inner function')
  return innerFunction;
  console.log('ending outer function')
}


const cluser=outerFunction();
console.log('completed outer function execution')
cluser()