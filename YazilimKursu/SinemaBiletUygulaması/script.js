const container=document.querySelector(".container");
const count=document.getElementById("count");
const amount=document.getElementById("amount");
const select=document.getElementById("movie");
const seats=document.querySelectorAll(".seat:not(.reserved)")



container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotalPrice();
    }
})

select.addEventListener("change",()=>{
    calculateTotalPrice();
})

const calculateTotalPrice=()=>{
    //koltuklar container içinde olduğundan seçimi documeny üzerinden değil container üzerinden yaptık
    const selectedSeats=container.querySelectorAll(".seat.selected")
    
    const selectedSeatsArr=[];
    const seatsArr=[];
//bu işlemler spread methodu ile daha kolay yapılabilir araştır
    selectedSeats.forEach(seat=>{
        selectedSeatsArr.push(seat);
    })

    seats.forEach(seat=>{
        seatsArr.push(seat);
    })

    let selectedSeatIndexs=selectedSeatsArr.map(seat=>{
        return seatsArr.indexOf(seat);
    })
    
    let selectedSeatCount=selectedSeats.length;
    count.innerHTML=selectedSeatCount;
    amount.innerText=selectedSeatCount*select.value;

    saveToLocalStorage(selectedSeatIndexs)
}

const getFromLocalStorage=()=>{
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
    if(selectedSeats !=null && selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add("selected");
            }
        })
    }
    
    
    
    const selectedMovieIndex=localStorage.getItem("selectedMovieIndex");
    if(selectedMovieIndex != null){
        select.selectedIndex=selectedMovieIndex;
    }
}

const saveToLocalStorage=(indexs)=>{
    localStorage.setItem("selectedSeats",JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex",select.selectedIndex);
}
getFromLocalStorage();
calculateTotalPrice();