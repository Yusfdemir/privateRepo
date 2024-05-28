let latitude,longitude="";

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess,onError)
}else{
    alert("Tarayıcınız Konum Bilgisini alamıyor")
}

function onSuccess(position){
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
    
    const api_key="b7864910c0154ea3bc16b847c8160ab9";
    const url=`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

    fetch(url)
        .then(response=>response.json())
        .then(result=> {
            let details=result.results[0].components;
            let{country,postcode,province}=details;

            document.querySelector(".result").innerHTML=`
                <p>Ülke: ${country}</p>
                <p>Posta kodu: ${postcode}</p>
                <p>Şehir: ${province}</p>
            `;
        });
}

function onError(error){
    if(error.code==1){
        alert("Kullanıcı erişim iznini reddetti");
    }
    else if(error.code==2){
        alert("Konum Alınamadı")
    }
    else{
        alert("Bir hata oluştu")
    }
}
