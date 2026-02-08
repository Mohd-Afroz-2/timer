const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const timer = document.getElementById("timer")

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes =  Math.floor(timeLeft / 60); 
    const seconds = timeLeft % 60 ;

    let displayMinutes = minutes < 10 ?"0" + minutes : minutes ;
    let displaySeconds = seconds < 10 ?"0" + seconds : seconds ;

    timer.innerHTML=`${displayMinutes} : ${displaySeconds}`;
}

const startTimer = () => {
    interval = setInterval (()=>{
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Time's up...stop !!!!");
            timeLeft=1500;
            updateTimer();
        }
    },  
    1000 )// for every second
}

const stopTimer = () => clearInterval(interval);

const resetTimer =()=>{
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}

