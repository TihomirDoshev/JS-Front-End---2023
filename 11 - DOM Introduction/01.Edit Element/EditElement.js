function editElement(section, textToEdit, newText) {
  let oldText = section.textContent;
  let editedText = oldText.replace(new RegExp(textToEdit, "g"), newText);
  section.textContent = editedText;
}
