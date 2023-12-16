function focused() {
  let sections = Array.from(document.getElementsByTagName("input"));

  for (const row of sections) {
    row.addEventListener("focus", focused);
    row.addEventListener("blur", unfocused);
  }

  function focused(e) {
    let divParenElement = e.currentTarget.parentNode;
    divParenElement.classList.add("focused");
  }
  function unfocused(e) {
    let divParenElement = e.currentTarget.parentNode;
    divParenElement.classList.remove("focused");
  }
}
