const body=document.getElementsByTagName("body");
const leftArrow=document.querySelector("#left-arrow i");
const rightArrow=document.querySelector("#right-arrow i");
const picture=document.getElementById("picture");
var pictureId=100;


function run(){
    pictureId+=1;
    console.log(pictureId)
    if(pictureId>110){pictureId=100;}
    if(pictureId<100){pictureId=110;}
    picture.src=`https://picsum.photos/id/${pictureId}/1000/350`;

}
rightArrow.addEventListener("click",()=>{
    clearInterval(time)
    changePicture(1);
    time=window.setInterval(()=>{run();},3000)
});

leftArrow.addEventListener("click",()=>{
    clearInterval(time);
    changePicture(-1);
    time=window.setInterval(()=>{run();},3000)

});
var time=window.setInterval(()=>{
run()
}
,3000)

function changePicture(direction) {
    console.log("tıklandı")
    if(direction==1) pictureId+=1;
    if(direction==-1) pictureId-=1;
    picture.src=`https://picsum.photos/id/${pictureId}/1000/350`;   
}


