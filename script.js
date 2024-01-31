const fruits = ["Banana", "Orange", "Apple", "Mango"];

function printList(){
    let text="<ul>";
    let getDemo=document.querySelector("#demo");
    fruits.forEach((ele)=>{
       return text+="<li>"+ele+"</li>"
    })
    text+="</ul>"
    
    getDemo.innerHTML=text;
}
printList()