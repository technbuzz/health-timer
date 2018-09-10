const timeEl = document.querySelector('time');
const btn = document.querySelector('button');
const msg = document.querySelector('.message');

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

btn.addEventListener('click', () => {
  timers.forEach((item)=>{
    startTimer(item.duration * 60, timeEl);
    msg.textContent = `Now ${item.message} for ${item.duration} minutes.`
  })
  // startTimer(1 * 60, timeEl);
  btn.disabled = true;
});


function notifyUser() {
  clearInterval(intervalId);
  btn.disabled = null;
  alert('Timer Up');
}
