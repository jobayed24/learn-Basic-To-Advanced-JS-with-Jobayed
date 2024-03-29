
function myOnMouseOut(){
    document.getElementById('demo').innerText=""
}

function myOnMouseMove(e){
    
    let x=e.clientX;
    let y=e.clientY;
  
   
    let color="Coordinate: "+x+" "+y;
    document.getElementById("demo").innerText=color
}