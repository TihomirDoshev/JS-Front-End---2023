function search() {
  let cityes = Array.from(document.querySelectorAll("li"));
  let searching = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let matches = 0;

  for (const li of cityes) {
    li.style.textDecoration = "none";
    li.style.fontWeight = "normal";

    if (li.textContent.includes(searching) && li.textContent.includes("")) {
      matches++;
      li.style.textDecoration = "underline";
      li.style.fontWeight = "bold";
    }
    result.textContent = `${matches} matches found`;
  }
}
