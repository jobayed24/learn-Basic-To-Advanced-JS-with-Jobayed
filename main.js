const docUl=document.querySelector('ul');
docUl.addEventListener('click',(ev)=>{
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('done')
    }
},false)