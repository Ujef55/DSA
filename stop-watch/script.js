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
    displayTime.innerHTML = `${minutes} : ${seconds} : ${tenthOfSecond}`
}

const timerStart = () => {
    time = setInterval(timer, 10);
}


start.addEventListener('click', timerStart);




