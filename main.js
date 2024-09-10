function validateForm(){
    let isValid=true;
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let email=document.getElementById('email').value;

    document.getElementById('successMessage').textContent='';
    let nameInput= document.getElementById('name').textContent
    let ageInput= document.getElementById('age').textContent
    let emailInput= document.getElementById('email').textContent
    nameInput='';
    ageInput='';
    emailInput='';
    
    if(name){
        document.getElementById('nameError').textContent='';
    }
    if(age){
        document.getElementById('ageError').textContent='';
    }
    if(email){
        document.getElementById('emailError').textContent='';
    }
    if(!name){
        document.getElementById('nameError').textContent='name is required';
        isValid=false;
    }
    if(!age){
        document.getElementById('ageError').textContent='age is required';
        isValid=false;
    }
    if(!email){
        document.getElementById('emailError').textContent='email is required';
        isValid=false;
    }

    if(isValid){
        document.getElementById('nameError').textContent=''
        document.getElementById('ageError').textContent=''
        document.getElementById('emailError').textContent=''
        document.getElementById('successMessage').textContent='data submitted successfully';
    }
    
}

function validateFormFieldOnChange(){
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    if(name){
        document.getElementById('nameError').textContent=''
    }
    if(age){
        document.getElementById('ageError').textContent=''
    }
    if(email){
        document.getElementById('emailError').textContent=''
    }
    if(!name){
        document.getElementById('nameError').textContent='name is required'
    }
    if(!age){
        document.getElementById('ageError').textContent='age is required'
    }
    if(!email){
        document.getElementById('emailError').textContent='email is required'
    }
}