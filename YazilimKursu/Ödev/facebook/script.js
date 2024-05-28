function CheckInfo(){
var name=document.querySelector("#name");
if(name.value== "") {
    document.getElementById("message").innerHTML = "**Fill the name please!";
    name.classList.add("red-border")
    return false;
 }
 var surname=document.querySelector("#surname");
 if(surname.value== "") {
     document.getElementById("message").innerHTML = "**Fill the surname please!";
     surname.classList.add("red-border")
     return false;
  }

  var mail=document.querySelector("#mail");
 if(mail.value== "") {
     document.getElementById("message").innerHTML = "**Fill the mail please!";
     mail.classList.add("red-border")
     return false;
  }
  
  var pswd=document.querySelector("#pswd");
  if(pswd.value== "") {
      document.getElementById("message").innerHTML = "**Fill the password please!";
      pswd.classList.add("red-border")
      return false;
   }

   var gün=document.querySelector("#gün");
  if(gün.value== "") {
      document.getElementById("message").innerHTML = "**Fill the day please!";
      gün.classList.add("red-border")
      return false;
   }
   var ay=document.querySelector("#ay");
   if(ay.value== "") {
       document.getElementById("message").innerHTML = "**Fill the month please!";
       ay.classList.add("red-border")
       return false;
    }

    var yıl=document.querySelector("#yıl");
   if(yıl.value== "") {
       document.getElementById("message").innerHTML = "**Fill the year please!";
       yıl.classList.add("red-border")
       return false;
    }

    var cinsiyet=document.querySelectorAll(".cinsiyet input");
   if(cinsiyet[0].value== ""||cinsiyet[1].value== ""||cinsiyet[2].value== "") {
       document.getElementById("message").innerHTML = "**Fill the year please!";
       cinsiyet.classList.add("text-danger")
       return false;
    }

    else{
        alert("Tebrikler Kaydınız Başarı ile Gerçekleşti");
    }
 


}