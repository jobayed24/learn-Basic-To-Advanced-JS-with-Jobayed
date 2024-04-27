const user=['jobayed','jonayed','j','tanvir','taju','shakhwat','rasel','raju','riaz','aklima','tushar','tonni','rejbi','honufa','jakir','ohid','rabaya'];

function onFilter(event){
    console.log(event)
  let filterVlaue=  user.filter((value)=>value.includes(event.target.value))
    if(filterVlaue.length!==user.length){
    document.getElementById('showData').innerHTML=filterVlaue;
    document.getElementById('lengthShow').innerHTML=filterVlaue.length+" Matches";
    }else{
        document.getElementById('showData').innerHTML=null
        document.getElementById('lengthShow').innerHTML=null
    }
}