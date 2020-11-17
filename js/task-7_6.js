const validInputRef = document.getElementById("validation-input");
// console.dir(validInputRef);
const inputValid = +validInputRef.dataset.length;
// console.log(inputValid);

validInputRef.addEventListener("input", (event) => {
  validInputRef.value = event.target.value.split(" ").join("");
});
validInputRef.addEventListener("blur", (event) => {
  validInputRef.classList.add("invalid");
  switch (event.currentTarget.value.length) {
    case inputValid:
      validInputRef.classList.replace("invalid", "valid");
      break;
    case 0:
      validInputRef.classList.remove("invalid");
      break;
  }
});
