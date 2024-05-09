const clock = document.getElementById("clock");

setInterval(function () {
  // To get date
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
