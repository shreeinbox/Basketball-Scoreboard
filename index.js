let homeCount = 0 
let guestCount = 0
let winnerEl = document.getElementById('winner')

function addone(x){
    
    if (x==='h'){
        homeCount += 1
    }else{
        guestCount += 1
    }
    displayScore()
}
function addtwo(x){
    if (x==='h'){
        homeCount += 2
    }else{
        guestCount += 2
    }
    displayScore()
}
function addthree(x){
    if (x==='h'){
        homeCount += 3
    }else{
        guestCount += 3
    }
    displayScore()
}
function highlight(){
    let home = document.getElementById('hometitle')
    let guest = document.getElementById('guesttitle')

    if (homeCount > guestCount){
        home.classList.add("highlight")
        guest.classList.remove("highlight")
    }
    if (homeCount < guestCount){
        home.classList.remove("highlight")
        guest.classList.add("highlight")
    }
    if (homeCount === guestCount){
        home.classList.remove("highlight")
        guest.classList.remove("highlight")
    }
}

function displayScore(){
    document.getElementById('homescore').textContent = homeCount
    document.getElementById('guestscore').textContent = guestCount
    highlight()
}
function newGame(){
    homeCount = 0;
    guestCount = 0;
    let winnerEl = document.getElementById('winner')
    winnerEl.textContent = " "
    resetCtrl()
    displayScore() // reset the score to 0 in display and removes any highlight
    startTimer() // starts the timer and once timer ends displays the winner!

}

function startTimer(){
    let timer = 10;
    let timerEl = document.getElementById('time')

    const intervalId = setInterval(() => {
                        timer -= 1;
                        timerEl.textContent = "0:" +  timer.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

                        if (timer === 0) {
                            clearInterval(intervalId); // Stop the interval after timer is 0.
                            displayWinner()
                        }
                        }, 1000); // 1000 milliseconds = 1 seconds
}                    
function displayWinner(){
    
    if(homeCount > guestCount){
        winnerEl.textContent = "Home won!!" 
    }
    if(homeCount < guestCount){
        winnerEl.textContent = "Guest won!!"
    }
    if(homeCount === guestCount){
        winnerEl.textContent = "Game draws!" 
    }
    winnerEl.classList.add("final")

    resetCtrl()
}

function resetCtrl(){
    let allBtn = document.getElementsByName('btn')
    allBtn.forEach((button) => {
        winnerEl.textContent === " " ? button.disabled = false: button.disabled = true;
    });
}