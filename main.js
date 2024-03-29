let myInputField=document.getElementById("myInputField");

function myOnCopyFn(){
    document.getElementById("demo").innerHTML="<span>"+myInputField.value+"</span>"
    function clearDemoDiv(){
        document.getElementById("demo").innerHTML=""
    }

    setTimeout(clearDemoDiv,3000)
}