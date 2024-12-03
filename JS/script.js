//Selecting element:
const placeholder = document.querySelector(".js-placeholder");
const firstNameInput = document.querySelector(".js-firstNameInput");
//Adding event listener:
firstNameInput.addEventListener("focus", () => {
  placeholder.classList.add("unhide");
});
firstNameInput.addEventListener("blur", () => {
  if (firstNameInput.value === "") {
    placeholder.classList.remove("unhide");
  }
});
