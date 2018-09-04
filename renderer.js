const time = document.querySelector('time');

const timer = setInterval(updateTime, 1000);

function updateTime() {
  time.innerHTML = Date();
}
