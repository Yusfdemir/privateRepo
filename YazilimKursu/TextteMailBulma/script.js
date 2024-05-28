var metin=document.querySelector(".metin").textContent;
var re=/[A-Za-z0-9_.-]+@[A-Za-z0-9\-]+\.[A-Za-z]{2,3}/gi;
var sonuç=metin.match(re);
document.querySelector(".sonuc").textContent=sonuç;