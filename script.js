const survey = [
    { name: "Steve", answer: "No"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "Yes"}
  ];


  const getIsTrue=survey.every(isPassed);

  function isPassed(value,index,arr){
    if(index===0){
        return true;
    }else{
        return (value.answer===arr[index-1].answer)
    }
  }

  console.log(getIsTrue)