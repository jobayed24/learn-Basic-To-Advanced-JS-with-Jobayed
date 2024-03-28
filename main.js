let getDemoDiv=document.getElementById("demo");

getDemoDiv.innerHTML="Innner Height:"+window.innerHeight+"<br />"+"InnerWidth:"+window.innerWidth;

function myOnResizeFn(){
    getDemoDiv.innerHTML="Innner Height:"+window.innerHeight+"<br />"+"InnerWidth:"+window.innerWidth;
}