function getInfo (){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("email: ",email);
    console.log("password: ",password);
    var reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
    if (reg.test(email) === false) {
        console.log(reg.test(email));   
        document.getElementById("erroremail").innerHTML="Wrong Email";
        document.getElementById("email").style.borderColor = "#dc3545";
     } 
    else{
         console.log(reg.test(email));
         document.getElementById("erroremail").innerHTML=""; 
         
    };
    if (password == "")
    {
        document.getElementById("errorpass").innerHTML="Wrong Password";
        document.getElementById("password").style.borderColor = "#dc3545";
    }
    else {
        document.getElementById("errorpass").innerHTML="";
    }
}