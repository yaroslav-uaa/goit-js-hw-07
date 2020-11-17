const validInputRef = document.getElementById("validation-input");
// console.dir(validInputRef);
const inputValid = +validInputRef.dataset.length;
// console.log(inputValid);

validInputRef.addEventListener("input", (event) => {
  validInputRef.value = event.target.value.trim();
});
validInputRef.addEventListener("blur", (event) => {
  validInputRef.classList.add("invalid");
  validInputRef.classList.remove("valid");
  switch (event.currentTarget.value.length) {
    case inputValid:
      validInputRef.classList.add("valid");
      validInputRef.classList.remove("invalid");
      break;
    case 0:
      validInputRef.classList.remove("invalid");
      validInputRef.classList.remove("valid");
      break;
  }
});
