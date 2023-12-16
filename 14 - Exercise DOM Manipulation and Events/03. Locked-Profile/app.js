function lockedProfile() {
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (const button of buttons) {
    button.addEventListener("click", showMore);
  }
  function showMore(e) {
    let button = e.currentTarget;
    let profile = button.parentElement;
    let childrens = Array.from(profile.children);
    let unlock = childrens[4];
    let userHideInfo = childrens[9];

    if (unlock.checked) {
      if (button.textContent === "Show more") {
        userHideInfo.style.display = "block";
        button.textContent = "Hide it";
      } else if (button.textContent === "Hide it") {
        userHideInfo.style.display = "none";
        button.textContent = "Show more";
      }
    }
  }
}
