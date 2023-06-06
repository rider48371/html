const timerEl = document.getElementById("timer");

const startButton = document.getElementById("start");

const stopButton = document.getElementById("stop");

const resetButton = document.getElementById("reset");

 

let startTime = 0;

let elapsedTime = 0;

let timerInterval;

 

function startTimer() {

  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {

    elapsedTime = Date.now() - startTime;

    timerEl.textContent = formatTime(elapsedTime);

  }, 10);

}

 

function formatTime(elapsedTime) {

  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  startButton.disabled = true;

  stopButton.disabled = false;

  return (

    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +

    "." +

    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +

    "." +

    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +

    "." +

    (milliseconds > 9 ? milliseconds : "0" + milliseconds)

  );

}

 

function stopTimer() {

  clearInterval(timerInterval);

  stopButton.disabled = true;

  startButton.disabled = false;

}

function resetTimer() {

  clearInterval(timerInterval);

  elapsedTime = 0;

  timerEl.textContent = "00:00:00:00";

  startButton.disabled = false;

  stopButton.disabled = true;

}

 

startButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click", resetTimer);