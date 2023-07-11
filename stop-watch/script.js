const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const displayTime = document.querySelector('.display');
let time = null;

let [minutes, seconds, tenthOfSecond] = [0, 0, 0];

const timer = () => {
    tenthOfSecond ++;
    if (tenthOfSecond === 100) {
        tenthOfSecond = 0;
        seconds ++;
        if (seconds === 60) {
            seconds = 0;
            minutes ++;
        }
    }

    let min =  minutes < 10 ? '0' + minutes : minutes;
    let sec = seconds < 10 ? '0' + seconds : seconds;
    let miliSec = tenthOfSecond < 10 ? '0' + tenthOfSecond : tenthOfSecond;

    displayTime.innerHTML = `${min} : ${sec} : ${miliSec}`;
}

const timerStart = () => {
    time = setInterval(timer, 10);
}


start.addEventListener('click', timerStart);