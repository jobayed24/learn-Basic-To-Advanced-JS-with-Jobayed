let controller;

const url="https://www.youtube.com/watch?v=oDpDXsXQoNg";
let downloadBtn=document.getElementById("download");
let cancelButton=document.getElementById("cancel");

downloadBtn.addEventListener("click",startDownloading)
cancelButton.addEventListener("click",()=>{
   if(controller){
    controller.abort();
    console.log("download aborted")
   }

})
function startDownloading(){
    controller=new AbortController();
    let signal=controller.signal;
    fetch(url,{signal})
        .then((respons)=>{
            console.log("Download Completed",respons)
        })
        .catch((err)=>{
            console.log(`Download errr: ${err.message}`)
        })
        
}
