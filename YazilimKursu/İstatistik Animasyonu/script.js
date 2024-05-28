var grf1=document.getElementById("graf1")
var toplamalan=1000;
var yüzde=50;
var hesapla=100/yüzde;
var piksel=toplamalan/hesapla;
var başlangıç=0;

var interval=setInterval(()=>{
    document.getElementById("graf1").style.width=başlangıç+"px";
    başlangıç+=1;
    if(başlangıç>=piksel){
        document.querySelector(".değer").innerText="%"+yüzde;
        clearInterval(interval)
    }
},1);