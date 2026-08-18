// Quesstion 1: Countdown Timer
let i = 5;
function countDowntimer() {
    const timer = setInterval(() => {
        if (i > 0) {
            console.log(i);
            i--;
        }
        else {
            console.log("Time's up")
            clearInterval(timer)
        }
    }, 1000);
}
countDowntimer();

// Question 2: Dynamic Sum Repeater with Stop Condition


let count = 0;

function repeatSum(x, y) {
    const sum = x + y;

    console.log(sum);

    const intervalId = setInterval(() => {
        console.log(sum);
        count++;

        if (count === 5) {
            console.log("Finished repeating");
            clearInterval(intervalId);
        }
    }, 2000);
}

repeatSum(6, 3);
 
// Question 3: Delayed Welcome Message

function delayedGreeting() {

    const message = "Welcome to our platform!";
    setTimeout(() => {
         console.log(`Hello, ${message}`);
    }, 3000);

}

delayedGreeting()

// Question 4: Interactive Stop Button Simulation

let a = 1;

function startCounter() {
  const intervalId = setInterval(() => {
    console.log(a);
    a++;
  }, 1000);

  return function stopCounter() {
    clearInterval(intervalId);
    console.log("Counter stopped.");
  };
}

const stop1 = startCounter();
const stop2 = startCounter();

setTimeout(() => {
  stop1();
  stop2();
}, 5500);

// Question 5: Periodic Reminder with Max Limit


let counts = 0;

function waterReminder() {
  
  const intervalId = setInterval(() => {
    console.log("Drink water!");
    counts++;

    if (counts === 4) {
      clearInterval(intervalId);
      console.log("Reminder stopped.");
    }
  }, 4000);
}

waterReminder();