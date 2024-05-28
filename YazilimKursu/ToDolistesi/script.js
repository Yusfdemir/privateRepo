
class todo{
    constructor(){
        this.start();
        this.event();
    }
    start(){
        this.render();

    }

    event(){
        
        document.querySelector(".add-btn").onclick =()=>{
            if(document.querySelector(".todo-inp").value != ""){
            this.add(document.querySelector(".todo-inp").value,Date.now());
            document.querySelector(".todo-inp").value="";
            this.render();
            }
            else{
                alert("Boş string giremezsiniz!!!");
            }
        }
        

    }

    add(str,id){
        var ls=localStorage.getItem('memory');
        if(!ls){
            localStorage.setItem('memory',JSON.stringify([]));
        }
        ls=JSON.parse(localStorage.getItem('memory'));
        ls.push({ value:str,id:id});
        localStorage.setItem('memory',JSON.stringify(ls));
    }

    render(){
        this.clear();
        var ls=localStorage.getItem('memory');
        if(ls){
            ls=JSON.parse(localStorage.getItem('memory'));

            ls.reverse().forEach(el => {
                var divDOM=document.createElement("div");
                divDOM.classList.add("item");
                divDOM.innerHTML=`<div class="tx">${el.value}</div>
                <button class="remove">
                    <span data-id="${el.id}"class="material-symbols-outlined">
                        delete
                    </span>
                </button>`

                document.querySelector(".item-list").appendChild(divDOM);
            });

            document.querySelectorAll(".item").forEach(el=>{
                el.querySelector(".remove").onclick=()=>{
                    var m=confirm("Bu ögeyi silmek istediğinize emin misimiz ?")
                    if(m){
                     this.delete(el.querySelector(".remove>span").getAttribute("data-id"));   
                    }
                }
            })
        }
    }

    clear(){
        document.querySelectorAll(".item").forEach(el=>{
            el.remove();
        })
    }

    delete(id){
        var list=JSON.parse(localStorage.getItem("memory"));
        list.forEach((el,i)=>{
            if(el.id==id){
                list.splice(i,1);
            }
        });
        localStorage.setItem("memory",JSON.stringify(list));
        this.render();
    }
}

const user=new todo();


// document.querySelector(".add-btn").onclick = function(){
//     if(document.querySelector(".todo-inp").value==""){
//         alert("Boş ekleme yapamazsınız");
//     }
//     else{
//     var divDOM=document.createElement("div");
//     divDOM.classList.add("item");
//     divDOM.innerHTML=`<div class="tx">${document.querySelector(".todo-inp").value}</div>
//     <button class="remove">
//         <span class="material-symbols-outlined">
//             delete
//         </span>
//     </button>`

//     document.querySelector(".item-list").appendChild(divDOM);
    
    
//     document.querySelector(".todo-inp").value="";  
//     }
    


// }