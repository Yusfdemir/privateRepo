const word_el= document.getElementById("word");
const popup= document.getElementById("popup-container");
const message_el=document.getElementById('success-message');
const wrongLetters_el=document.getElementById('wrong-letters');
const items=document.querySelectorAll(".item");
const message=document.getElementById("message");
const playAgain=document.getElementById('play-again');

const correctletters=[];
const wrongLetters=[];
let selectedWord=getRandomWord();

function getRandomWord(){
    const words=["javascript","java","python",'css','html','react',"angular","perl","pascal","swift","ruby"];

    return words[Math.floor(Math.random()*words.length)]
}



function displayWord(){
    
    word_el.innerHTML=`
        ${selectedWord.split('').map(letter =>`
            <div class="letter">
                ${correctletters.includes(letter) ? letter:''}
            </div>
        `).join('')} 
    `;
    const w=word_el.innerText.replace(/\n/g,'');
    if(w===selectedWord){
        popup.style.display='flex';
        message_el.innerText='Tebrikler Kazandınız.'
    }
}

function updateWrongLetters(){
    wrongLetters_el.innerHTML=`
    ${wrongLetters.length>0 ? '<h3>Hatalı Harfler</h3>':''}
    ${wrongLetters.map(letter=>` <span>${letter}</span>`)}
    `;

    items.forEach((item,index)=>{
        const errorCount=wrongLetters.length;
        if(index<errorCount){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

    if(wrongLetters.length === items.length){
        popup.style.display='flex';
        message_el.innerText='Maalesef Kaybettiniz';
    }
}

function displayMessage(){
     message.classList.add('show')
     setTimeout(() => {
        message.classList.remove('show')
     }, 1500);
}

playAgain.addEventListener("click",function(){
    correctletters.splice(0);//diziyi sıfırlar
    wrongLetters.splice(0);
    selectedWord=getRandomWord();
    displayWord();
    updateWrongLetters();
    popup.style.display='none';
})
window.addEventListener('keydown',function(e){
    if((e.keyCode>=65 && e.keyCode<=90)||e.keyCode==222){
        const letter=e.key;
        if(selectedWord.includes(letter)){
            if(!correctletters.includes(letter)){
               correctletters.push(letter);
               displayWord(); 
            }
            else{
                displayMessage();
               
            }
        }
        else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter)
                updateWrongLetters();
            }else{
                displayMessage();
            }
        }
    }
})

displayWord()