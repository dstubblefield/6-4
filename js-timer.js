function theFinalCountDown(seconds) {
  let countDown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countDown);
      console.log("DONE!");
    } else {
      console.log(seconds);
    }
  }, 1000);
}
theFinalCountDown(20);

// function randomGame() {
//   let number;
//   let counter = 0;
//   let draw = setInterval(function () {
//     number = Math.random();
//     counter++;
//     if (number > 0.75) {
//       clearInterval(draw);
//       console.log(`Number of tries: ${counter}`);
//     } else {
//       console.log(`Number: ${number}, Tries: ${counter}`);
//     }
//   }, 1000);
// }
