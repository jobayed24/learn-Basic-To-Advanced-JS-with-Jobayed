function outerFunction(){
  console.log('enter outserFunction')
  const outerVariable='I am in outside !';
  function innerFunction(){
    console.log('enter innerFunction');
    console.log(outerVariable);    
  }
  console.log('ending inner function')
   innerFunction();
  console.log('ending outer function')
}

outerFunction();
