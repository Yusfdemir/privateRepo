var times=30;
var fps;

const ends=()=>{
    document.querySelector(".box").classList.add("none");
    var divider=Number(document.querySelector(".totalclick").textContent)
    if(divider==0){
        divider=1;
    }
    swal("Süreniz Bitti!", `
    Puan:             ${Number(document.querySelector(".successclick").textContent)*100/divider}\n
    Toplam Tıklama:   ${document.querySelector(".totalclick").textContent}\n
    Başarılı Tıklama: ${document.querySelector(".successclick").textContent} \n
    Toplam Süre: ${times} saniye  
    `, "success");
    classclear(false);
}

document.querySelector(".time").textContent=String(times);

const classclear=(status)=>{
    fps=Number(document.querySelector(".input").value);
    if (status) {
        document.querySelectorAll(".hidden").forEach(el => {
            el.classList.add("opatrue")            
        }); 
        
        document.querySelectorAll(".none").forEach(el => {
            el.classList.add("block")            
        });
        document.querySelectorAll(".btn").forEach(el => {
            el.classList.add("none")            
        });
        document.querySelector(".box").classList.remove("none");
        var counter=0;

        var intrvl=setInterval(() => {
            var width=Math.round(Math.random()*((document.querySelector(".main").offsetWidth)-50))
            var height=Math.round(Math.random()*((document.querySelector(".main").offsetHeight)-50))
            
            document.querySelector(".box").setAttribute("style",`position: absolute;right:${width}px;bottom:${height}px;`)
        }, fps);

        var interval=setInterval(() => {
        if(counter<times){
            counter++
            document.querySelector(".time").textContent=String(times-counter)
        }
        else{
            clearInterval(interval)
            clearInterval(intrvl)
            ends();
        }
    }, 1000);
    }
    else{
        document.querySelectorAll(".hidden").forEach(el => {
            el.classList.remove("opatrue")            
        }); 
        
        document.querySelectorAll(".none").forEach(el => {
            el.classList.remove("block")            
        });
        document.querySelectorAll(".btn").forEach(el => {
            el.classList.remove("none")            
        });
        document.querySelector(".totalclick").textContent="0"
        document.querySelector(".successclick").textContent="0"
    }
    

}

document.querySelector(".main").onclick=()=>{
    document.querySelector(".totalclick").textContent=Number(document.querySelector(".totalclick").textContent)+1;
}

document.querySelector(".box").onclick=()=>{
    document.querySelector(".successclick").textContent=Number(document.querySelector(".totalclick").textContent)+1;
}

document.querySelector(".input").onchange=()=>{
    document.querySelector(".btn").textContent=`Başla (FPS:${document.querySelector(".input").value}ms)`
}

document.querySelector(".btn").onclick=()=>{
    classclear(true);
}