let intervalId;
const clock = document.getElementById('time-upt');

function startClock() {
    intervalId = setInterval(function() {
        const time = new Date().getSeconds();
        clock.innerHTML = time;
    }, 1000);
}

function stop(){
    clearInterval(intervalId);
}

function reset(){
    stop();
    clock.textContent = '0';
}