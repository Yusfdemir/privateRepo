// Jquery tarzı bir fonksiyon
const $ = (selector)=>{  
    return document.querySelector(selector);
}

$('.add').onclick = function (params) {
    var val=$('.add-item-inp').value;
    if(val.length<=0){
        alert("Boş string giremezsiniz!");
        return false;
    }
    var item =document.createElement('button');
    item.textContent=val;
    item.classList.add('item');

    item.onclick=()=>{
        $(".c-item").textContent += " "+val+" ";
        $(".c-item").textContent=$(".c-item").textContent.trim()
    }
    $(".item-list").appendChild(item);
    $('.add-item-inp').value=""
}

    $(".clear").onclick=()=>{
        $(".c-item").textContent="";
    }