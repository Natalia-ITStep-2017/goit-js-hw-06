const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", (event) => {

  if (event.target.classList.contains("invalid")) {
    event.target.classList.remove("invalid")
  }
  
   if (event.target.classList.contains("valid")) {
    event.target.classList.remove("valid")
   }
  
  if (event.target.value.length == event.target.dataset.length) {
  event.target.classList.add("valid");
  } else if (event.target.value !== ""){
    event.target.classList.add("invalid");
}
});
