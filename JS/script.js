//Selecting elements:
const placeholderList = document.querySelectorAll(".js-placeholder");
const inputElements = document.getElementsByTagName("input");
// Loop through all input fields and add event listeners
for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("focus", () => {
    placeholderList[i].classList.add("unhide");
  });
  
  inputElements[i].addEventListener("blur", () => {
    if (inputElements[i].value === "") {
      placeholderList[i].classList.remove("unhide");
    }
  });
}
