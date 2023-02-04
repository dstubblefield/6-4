function countDown(count) {
  const counts = setInterval(function () {
    count--;
    if (count <= 0) {
      clearInterval(counts);
      console.log("Done");
    } else {
      console.log(count);
    }
  }, 1000);
}

function randomGame() {
  let number;
  let counter = 0;
  let draw = setInterval(function () {
    number = Math.random();
    counter++;
    if (number > 0.75) {
      clearInterval(draw);
      console.log(`Number of tries: ${counter}`);
    } else {
      console.log(`Number: ${number}, Tries: ${counter}`);
    }
  }, 1000);
}
