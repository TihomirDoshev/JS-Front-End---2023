function attachEventsListeners() {
  let days = document.getElementById("days");
  let daysButton = document.getElementById("daysBtn");

  let hours = document.getElementById("hours");
  let hoursButton = document.getElementById("hoursBtn");

  let minutes = document.getElementById("minutes");
  let minutesButton = document.getElementById("minutesBtn");

  let seconds = document.getElementById("seconds");
  let secondsButton = document.getElementById("secondsBtn");

  daysButton.addEventListener("click", daysCovert);
  hoursButton.addEventListener("click", hoursCovert);
  minutesButton.addEventListener("click", minutesCovert);
  secondsButton.addEventListener("click", secondsCovert);

  function daysCovert() {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }
  function hoursCovert() {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }
  function minutesCovert() {
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
    seconds.value = minutes.value * 60;
  }
  function secondsCovert() {
    minutes.value = seconds.value / 60;
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
  }
}
