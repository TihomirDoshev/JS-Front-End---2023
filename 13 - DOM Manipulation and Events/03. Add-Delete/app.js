function addItem() {
  let newInput = document.querySelector("#newItemText");
  let newLi = document.createElement("li");
  newLi.textContent = newInput.value;

  let deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "[Delete]";
  deleteLink.addEventListener("click", deleteItem);
  newLi.appendChild(deleteLink);

  let items = document.querySelector("#items");
  items.appendChild(newLi);

  newInput.value = "";

  function deleteItem(e) {
    let row = e.currentTarget.parentNode;
    row.remove();
  }
}
