const findData=(id)=>{
    fetch("veri.json")
.then(response=>{
    return response.json();
})
.then(veri=>{
    veri.forEach(element => {
       if(element.id==id){
        addHtml(element);
       }

    });
   
})
}

const addHtml=(element)=>{

    document.querySelector(".card-container").innerHTML+=`
    <div class="card-item">
        <img src="${element.url}" alt="${element.url} adresli resim">
        <p class="text">
            Title:${element.title}<br>
            AlbumId:${element.albumId}<br>
            Id:${element.id}<br>
            URL:${element.url}<br>
        </p>
         <button class="remove-button">Kartı Sil</button>
    </div>
    `  
   
    document.querySelectorAll(".remove-button").forEach(element => {
        element.onclick=()=>{
            element.parentElement.remove();
        }
    });

}


document.querySelector(".add-picture").onclick=()=>{
   var id=document.querySelector(".take-id").value;
    if(id==""){ // Verideki title kısmı lorem ipsum gibi random olduğu için eklemeyi id alanına göre yapıyorum
        alert("Ekleme yapmak için id alanını bir değer giriniz");
    }
    else{
        findData(id);
        document.querySelector(".take-id").value="";
    }
}


















    //  const addHtml=(element)=>{
    //     var containerdiv=document.createElement("div");
    //     containerdiv.classList.add("card-container");
    //      var itemdiv=document.createElement("div");
    //      itemdiv.classList.add("card-item");
    //      var img=document.createElement("img")
    //      img.setAttribute("src",element.url)
    //      var p=document.createElement("p");
    //      p.classList.add("text");
    //      p.innerHTML=`Title:${element.title}<br>AlbumId:${element.albumId}<br>Id:${element.id}<br>URL:${element.url}<br>`
    //      var button=document.createElement("button");
    //      button.classList.add("remove-button");
    //      button.innerText="Kartı Sil";
     
    //      itemdiv.appendChild(img);
    //      itemdiv.appendChild(p);
    //      itemdiv.appendChild(button);
        
    //      document.querySelector(".card-container").appendChild(itemdiv);
    //  }
    
    
    