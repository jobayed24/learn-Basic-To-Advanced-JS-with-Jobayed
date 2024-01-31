const fruits = ["Banana", "Orange", "Apple", "Mango"];

function printList(){
    let text="<ul>";
    let getDemo=document.querySelector("#demo");

    
    for(let i=0;i<fruits.length; i++){
        text+="<li>"+fruits[i]+"</li>";
    }
    text+="</ul>"
    
    getDemo.innerHTML=text;
}
printList()