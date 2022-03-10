const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const select = document.querySelector('#playto')
let playto = select.options[0].value;

let p1Score = 0;
let p2Score = 0;
let winningScore = +playto;
let isGameOver = false;

p1button.addEventListener('click', function(){
    if(!isGameOver){
    p1Score += 1;
    if(p1Score === winningScore){
        isGameOver = true;
        p1Display.classList.add('winner')
        p2Display.classList.add('loser')   
     }
     p1Display.textContent = p1Score;
   }
})


p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')   
        }
        p2Display.textContent = p2Score;
        
    }
})

resetButton.addEventListener('click', reset)

select.addEventListener('change', function(){

    playto = this.value
    winningScore = +playto
    reset()
})
function reset(){
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p2Display.textContent = p1Score;
    p1Display.textContent = p2Score;
    p2Display.classList.remove('winner', 'loser')
    p1Display.classList.remove('winner', 'loser')
}