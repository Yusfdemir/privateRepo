let ulDom=document.querySelector('#list');
let task=document.querySelector('#task');
let deleteBtn;
let checkBtn;

const addHtml=(element)=>{
  let liDom=document.createElement('li')
  let newSpan=document.createElement('span')
  let firstspan=document.createElement('span')
  newSpan.innerHTML=`<span class="material-symbols-outlined">close</span>`;
  newSpan.classList.add("float-right","btn")
  firstspan.innerText=element.text;
  if(element.ıscompleted){
    liDom.classList.add("checked");
  }
  liDom.appendChild(firstspan);
  liDom.appendChild(newSpan);
  ulDom.appendChild(liDom,ulDom)
  
}
const startStorage=()=>{
    var ls=localStorage.getItem("memory");
    if(!ls){
      localStorage.setItem("memory",JSON.stringify([]));
    }
    else{
      ls=JSON.parse(localStorage.getItem("memory"));
      console.log(ls)
      ls.forEach(el => {
        addHtml(el)
      });
      deleteBtn=document.querySelectorAll(".btn");
      checkBtn=document.querySelectorAll("#list li")
      
  
    }

}
startStorage();



const addToDo=()=>{
  const str=task.value;
  const item={
    text:str,
    ıscompleted:false
  }
  const ls=JSON.parse(localStorage.getItem("memory"));
  ls.push(item);
  localStorage.setItem("memory",JSON.stringify(ls));
  addHtml(item);
  task.value="";
}

document.querySelector("#liveToastBtn").onclick=()=>{
    addToDo();
}

const deleteToDo=(event)=>{
  const del=event.target.parentElement;
  const tex=del.parentElement.children[0].textContent;
  let ls=JSON.parse(localStorage.getItem("memory"));
  ls=ls.filter(el=>el.text!=tex);
  localStorage.setItem("memory",JSON.stringify(ls));
  del.parentElement.remove();
}

const completeToDo=(event)=>{
  const del=event.target;
  del.classList.toggle("checked")
 
  const tex=del.children[0].textContent;
  let ls=JSON.parse(localStorage.getItem("memory"));
   ls.forEach(el=>{
    if(el.text==tex){
        el.ıscompleted= !el.ıscompleted;
    }
   })
  localStorage.setItem("memory",JSON.stringify(ls));
 
}

deleteBtn.forEach(btn=>{
  btn.addEventListener("click",deleteToDo)
})

checkBtn.forEach(btn=>{
  btn.addEventListener("dblclick",completeToDo)
})
