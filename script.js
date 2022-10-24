//get current time
const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();
//update clock hands to be matching the current time
const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");
let hourDegrees = 30;
let minuteDegrees = 6;
let secondDegrees = 6;
const currentHoursDegrees = currentHour * hourDegrees;
const currentMinutesDegrees = currentMinutes * minuteDegrees;
const currentSecondsDegrees = currentSeconds * secondDegrees;
hoursHand.style.transform = `rotate(${currentHoursDegrees + 90}deg)`;
minutesHand.style.transform = `rotate(${currentMinutesDegrees + 90}deg)`;
secondsHand.style.transform = `rotate(${currentSecondsDegrees + 90}deg)`;

//create function to move hands each appropriate amount of time
setInterval(() => {
  secondsHand.style.transform = `rotate(${
    secondDegrees + 90 + currentSecondsDegrees
  }deg)`;
  secondDegrees += 6;

  if ((secondDegrees + currentSecondsDegrees - 6) % 360 === 0) {
    minutesHand.style.transform = `rotate(${
      minuteDegrees + 90 + currentMinutesDegrees
    }deg)`;
    minuteDegrees += 6;
  }
  if ((minuteDegrees + currentMinutesDegrees - 6) % 360 === 0) {
    hoursHand.style.transform = `rotate(${
      hourDegrees + 90 + currentHoursDegrees
    }deg)`;
  }
}, 1000);
