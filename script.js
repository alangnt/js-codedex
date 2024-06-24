// Let's set up our variables
const bell = new Audio("./sound/bell.wav");
const startTimer = document.querySelector("#timer");
const session = document.querySelector("#minutes");
let sessionInterval;
let state = true;

// Set up the timer function using ES6 arrow function
const appTimer = () => {
  // Let's transform the timer's text into numbers
  const sessionTime = Number.parseInt(session.textContent);

  // Let's make sure the timer hasn't already been started
  if (state) {
    state = false;
    let totalSec = sessionTime * 60;

    // Update the seconds
    const updateSec = () => {
      // Set up the seconds and minutes
      const minutes = document.querySelector("#minutes");
      const seconds = document.querySelector("#seconds");

      // Remove one second every second
      totalSec--;

      // Set up the remaining timer
      let minutesLeft = Math.floor(totalSec / 60);
      let secondsLeft = totalSec % 60;

      // Make sure there's still a 0 before the seconds
      if (secondsLeft < 10) {
        seconds.textContent = "0" + secondsLeft;
      } else {
        seconds.textContent = secondsLeft;
      }
      minutes.textContent = `${minutesLeft}`;

      // Clear the timer when the timer hits 0
      if (minutesLeft === 0 && secondsLeft === 0) {
        bell.play();
        clearInterval(sessionTime);
      }

    }

    // Set up the timer
    sessionInterval = setInterval(updateSec, 1000);
  } else {
    // If the timer has already been started, add a message saying the timer has already been started
    var alreadyStarted = document.querySelector(".already-started");
    alreadyStarted.classList.add("show");
  }
}

// Now let's create an EventListener for the timer
startTimer.addEventListener("click", appTimer);