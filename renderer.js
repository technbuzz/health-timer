const timeEl = document.querySelector('time');

let intervalId;
function startTimer(duration, display) {
  let timer = duration;
  intervalId = setInterval(() => {
    --timer;
    let minutes = parseInt(timer/60,10);
    let seconds = parseInt(timer%60,10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

startTimer(250, timeEl)
