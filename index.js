const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      updateClockface();
      console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  }
}

timer.start();

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
};

 function pad(value) {
    return String(value).padStart(2, '0');
  }

  function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};

// class CountdownTimer {
//   constructor({ onTick, targetDate }) {
//     this.intervalId = null;
//     this.onTick = onTick;
//     this.targetDate = targetDate;
//   }

//   start() {
//     this.intervalId = setInterval(() => {
//       if (
//         refs.days.textContent === '00' &&
//         refs.hours.textContent === '00' &&
//         refs.mins.textContent === '00' &&
//         refs.secs.textContent === '00'
//       ) {
//         clearInterval(this.intervalId);
//         return;
//       }
//       const currentTime = Date.now();
//       const deltaTime = this.pad(this.targetDate) - currentTime;
//       const time = this.getTimeComponent(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   check() {
//     if (
//       refs.days.textContent === '00' &&
//       refs.hours.textContent === '00' &&
//       refs.mins.textContent === '00' &&
//       refs.secs.textContent === '00'
//     ) {
//       clearInterval(this.intervalId);
//       return;
//     }
//     const currentTime = Date.now();
//     const deltaTime = this.pad(this.targetDate) - currentTime;
//     const time = this.getTimeComponent(deltaTime);

//     this.onTick(time);
//   }



// const countdownTimer = new CountdownTimer({
//   targetDate: new Date('Jan 7, 2021').getTime(),
//   onTick: updateClockface,
// });

// function updateClockface({ days, hours, mins, secs }) {
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }

// countdownTimer.check();
// countdownTimer.start();



