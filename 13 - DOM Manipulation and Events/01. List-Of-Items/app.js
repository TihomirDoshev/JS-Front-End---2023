function addItem() {
  let newInput = document.querySelector("#newItemText");
  let newLi = document.createElement("li");
  newLi.textContent = newInput.value;

  let items = document.querySelector("#items");
  items.appendChild(newLi);

  newInput.value = "";
}
