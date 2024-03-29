let myInputField=document.getElementById("myInputField");

function myOnMouseEneterFn(){
   myInputField.style.display="inline-block"
   myInputField.style.padding="5px 10px"
   myInputField.style.marginTop="10px";
   myInputField.style.borderRadius="3px"

   myInputField.style.backgroundColor="green"
}

function myOnMouseLeaveFn(){
     myInputField.style.display="block"
   myInputField.style.padding=" "
   myInputField.style.marginTop=" ";
   myInputField.style.borderRadius=""

   myInputField.style.backgroundColor=""
}