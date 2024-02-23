
var fistn=document.getElementById('fn');
var lastn=document.getElementById('ln');
var email=document.getElementById('email');
var password=document.getElementById('pass');
var cpassword=document.getElementById('cpass');
  // Get the checkbox element
var checkbox = document.getElementById('cb');
var  cbvalue=false;

var nvali=/^[a-zA-Z]+$/
var emailvali = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 


 // Add event listener to the checkbox
 checkbox.addEventListener('change', function() {
   
     
     // Check if the checkbox is checked
     if (checkbox.checked) {
     cbvalue =true;
     } else {
         cbvalue=false;
     }
 });
 

function Validation(){
   
if(fistn.value.trim()==""){
    
    alert("First Name is requierd");
    return false;
}
if(!nvali.test(fistn.value)){
    alert("Enter valid information");
    return false;
}
if(lastn.value.trim()==""){
    alert("Last Name is requierd");
    return false;
}
if(!nvali.test(lastn.value)){
    alert("Enter valid information");
    return false;
}
if(email.value.trim()==""){
    alert("Email is requierd");
    return false;
}
if(!emailvali.test(email.value)){
    alert("Enter valid information");
    return false;
}
if(password.value.trim()==""){
    alert("Password is requierd");
    return false;
}
if(cpassword.value.trim()==""){
    alert("Confirm Password is requierd");
    return false;
}
if(password.value!==cpassword.value){
    alert("Enter Valid Password");
    return false;
}
if(cbvalue==false){
    alert("Accept 'Terms & Condition'");
    return false;
} 
}