function mySearchFn(){
    let getMySearch=document.getElementById("mySearch");
  
    if(getMySearch.value!=""){
        document.getElementById("demo").innerHTML="You are Search for: "+getMySearch.value;
    }else{
        document.getElementById("demo").innerHTML=""
    }
    
}

