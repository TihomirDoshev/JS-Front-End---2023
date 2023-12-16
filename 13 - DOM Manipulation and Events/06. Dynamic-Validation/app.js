function validate() {
  let inputMail = document.getElementById("email");
  inputMail.addEventListener("change", onChange);

  function onChange(e) {
    const element = e.currentTarget;
    let regex = /[a-z]+@[a-z]+\.[a-z]+/;

    if (!regex.test(element.value)) {
      element.classList.add("error");
    } else {
      element.classList.remove("error");
    }
  }
}
