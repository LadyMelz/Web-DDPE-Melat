function msg1(){  
 alert("Done");  
}
function msg2(){  
 alert("Cleared");  
}
function focusevent(){
 document.getElementById("username1").style.background="aqua";
}
function blurevent(){
 var data = document.getElementById("password1");
 if(data.length < 6){
  document.getElementById("password1").style.background="red";
 }
}
function inputevent(){
 document.getElementById("phone").style.background="yellow";
}
function invalidevent(){  
 alert("Invalid input detected");  