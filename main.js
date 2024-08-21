const element=document.getElementById('userForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e)
    const formData=new FormData(e.target);
    // const fromentry=Object.fromEntries(formData);
    const datas=Object.fromEntries(formData);
    const convertDatas=Array.from(formData.entries());
    const cData=Object.fromEntries(convertDatas);
    // console.log('cData',cData)
    console.log('datas',datas)
   
})