function attachGradientEvents() {
  let gradientBox = document.querySelector("#gradient");

  gradientBox.addEventListener("mousemove", gradientMove);

  gradientBox.addEventListener("mouseout", gradientLeave);

  let result = document.querySelector("#result");

  function gradientMove(e) {
    let power = e.offsetX / (e.target.clientWidth - 1);

    power = Math.trunc(power * 100);

    result.textContent = power + "%";
  }
  function gradientLeave(e) {
    result.textContent = "";
  }
}
