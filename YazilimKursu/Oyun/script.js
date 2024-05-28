

const type =["kare","dikdörtgen","ball"];
var ball_gravity=3,ball_time=20;
const repeat=[1000,2000];
var tm=5;
class game{

    constructor(){
        this.ball=document.createElement("div");
        this.ball.classList.add("item");
        this.ball.classList.add(type[this.random(0,(type.length-1))])
        document.querySelector("main").appendChild(this.ball);
        this.x=this.random(0,(document.querySelector("main").offsetWidth - this.ball.offsetWidth));
        this.y=-70;
        this.bgcolor=this.color();
        this.ball.setAttribute("style",`background-color:${this.bgcolor};position: absolute;top:${this.y}px;left:${this.x}px`);
        this.event();
        this.interval=setInterval(() => {
            this.ball_run();
        }, ball_time);
        
    }

    color(){
        return `rgba(${this.random(0,255)},${this.random(0,255)},${this.random(0,255)},${this.random(0.5,1)})`
    }
    random(min,max){
        min=Math.ceil(min);
        max=Math.floor(max);
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
    ball_run(){
        this.y+=ball_gravity;
        if(this.y>(document.querySelector("main").offsetHeight-this.ball.offsetHeight)){
            this.remove();
        }
        this.ball.setAttribute("style",`background-color:${this.bgcolor};position: absolute;top:${this.y}px;left:${this.x}px`);
    }

    remove(){
        this.ball.remove();
        clearInterval(this.interval)
    }

    event(){
        this.ball.onclick=()=>{
            document.querySelector(".puan").textContent=Number(document.querySelector(".puan").textContent)+5;
            this.remove();
            document.querySelector(".bt").textContent=Number(document.querySelector(".bt").textContent)+1;
           
        }
        document.querySelector("main").onclick=()=>{
            document.querySelector(".tt").textContent=Number(document.querySelector(".tt").textContent)+1;
        }
    }
}


var stt;
var stt2;

const start=()=>{
    const user=new game();

    stt=setInterval(() => {
        new game();
    }, user.random(repeat[0],repeat[1]));
    var cl=tm;
    document.querySelector(".time").textContent=cl;
    stt2=setInterval(() => {
        if(cl<=0){
            stop();
        }
        cl-=1;
        document.querySelector(".time").textContent=cl;
    }, 1000);
}

const stop=()=>{
    clearInterval(stt);
    clearInterval(stt2);
    var puan=document.querySelector(".puan").textContent;
    var total=document.querySelector(".tt").textContent;
    var bt=document.querySelector(".bt").textContent;
    document.querySelector(".puan").textContent=0;
    document.querySelector(".tt").textContent=0;
    document.querySelector(".bt").textContent=0;

    document.querySelectorAll(".item").forEach(element =>{
        element.remove();
    })
    swal(`Puanınız:${puan}\nToplam Tıklamanız:${total}\nBaşarılı Tıklamanız:${bt}\nOyuna başlamak için butona tıklayınız`,{button:"Başla"})
    .then((value) => {
        start();
    });
}

swal("Oyuna başlamak için butona tıklayınız",{button:"Başla"})
.then((value) => {
  start();
});