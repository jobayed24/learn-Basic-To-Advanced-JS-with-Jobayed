let getCopiedElement=document.getElementById("copied");
function myOncopyFn(){
    getCopiedElement.style.display="inline";
    function disableStyle(){
        getCopiedElement.style.display="none";
    }
    setTimeout(disableStyle,3000)
}