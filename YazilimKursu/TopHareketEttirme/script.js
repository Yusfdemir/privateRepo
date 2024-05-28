


class game{
    constructor(ballclass){
        this.fps=10;
        this.ball=document.querySelector(ballclass)
        this.x=0;
        this.y=0;
        this.goleft=false;
        this.gotop=false;
        this.yatay=true;

        this.setCoordinate();
        this.run();
        
    }

    setCoordinate(){
        this.ball.setAttribute('style',`position: fixed;top: ${this.y}px;left: ${this.x}px;`)

    }

    run(){
        setInterval(() => {

            if(this.yatay==true){
                if(this.goleft==false){
                    this.x+=1;
                }
                else{
                    this.x-=1;
                }
                    
            }
            else{
                if(this.gotop==false){
                    this.y+=1;
                }
                else{
                    this.y-=1;
                }    
            }
           
            


            this.setCoordinate();
        }, this.fps);

    }

    

    right(){
        this.goleft=false;
        this.yatay=true;
       
    }

    left(){
        this.goleft=true;
        this.yatay=true;
    }

    top(){
        this.gotop=true;
        this.yatay=false;
    }

    bottom(){
        this.gotop=false;
        this.yatay=false;
    }

}

const game1=new game(".ball");

document.onkeydown=(event)=>{
  
    if(event.keyCode==37){
        game1.left();
    }
    else if(event.keyCode==38){
        game1.top();
    }
    else if(event.keyCode==39){
        game1.right();
    }
    else if(event.keyCode==40){
        game1.bottom();
    }
}

 