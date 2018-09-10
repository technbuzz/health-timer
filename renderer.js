const timeEl = document.querySelector('time');
const btn = document.querySelector('button');
const msg = document.querySelector('.message');
const ding = document.querySelector('audio');

const timers = [
  {
    "duration": 1,
    "message":"Sit"
  },
  {
    "duration": 2,
    "message":"Stand"
  },
  {
    "duration": 3,
    "message":"Move Around"
  }
];

let intervalId;
function startTimer(duration, display) {
  let timer = duration;
  intervalId = setInterval(() => {
    --timer;
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (minutes == 0 && seconds == 0) {
      notifyUser();
    }
  }, 1000);
}

btn.addEventListener('click', clickHandler);

function clickHandler(){
  if(timers.length){
    startTimer(timers[0].duration * 60, timeEl);
    msg.textContent = `Now ${timers[0].message} for ${timers[0].duration} minutes.`
  }
  // startTimer(1 * 60, timeEl);
  btn.disabled = true;
}


function notifyUser() {
  clearInterval(intervalId);
  ding.play();
  timers.shift();
  console.log(timers);
  

  if(!timers.length){
    btn.disabled = null;
  } else {
    clickHandler();
  }
}
