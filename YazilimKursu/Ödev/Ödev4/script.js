function verifyPassword() {
    var pw = document.querySelector("#pswd").value;
    //check empty password field
    if(pw == "") {
       document.getElementById("message").innerHTML = "**Fill the password please!";
       return false;
    }
   
   //minimum password length validation
     if( (pw.length < 8) ||(pw.length > 16) ) {
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters and at most 15 characters";
       return false;
    }
     // check include .,?/%& 
      if(pw.replace(/[^+%&/^()?]/g,'')==""){
      document.getElementById("message").innerHTML = "**Password must include one of '.,?/+&%^' characters";
      return false;
    }
    //check Capital letter
      if((pw.replace(/[^A-ZÇĞİŞÖÜ]/g,""))==""){
      document.getElementById("message").innerHTML = "**Password must include at least one capital letter";
      return false;
    }
    // check small letter 
     if((pw.replace(/[^a-zçğışöü]/g,""))==""){
      document.getElementById("message").innerHTML = "**Password must include at least one small letter";
      return false;
    }
    // check for number
    if((pw.replace(/[^0-9]/g,""))==""){
      document.getElementById("message").innerHTML = "**Password must include at least one number";
      return false;
    }

    else {
       alert("Password is correct");
       
    }
    
  }


