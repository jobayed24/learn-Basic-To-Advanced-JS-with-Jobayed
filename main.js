const user=['jobayed','jonayed','j','tanvir','taju','shakhwat','rasel','raju','riaz'];

function onFilter(event){
    
  let filterVlaue=  user.filter((value)=>value.includes(event.target.value))
    if(filterVlaue.length!==user.length){
    document.getElementById('showData').innerHTML=filterVlaue;
    document.getElementById('lengthShow').innerHTML=filterVlaue.length+" Matches";
    }else{
        document.getElementById('showData').innerHTML=''
        document.getElementById('lengthShow').innerHTML=''
    }
}