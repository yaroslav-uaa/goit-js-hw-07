const validInputRef = document.getElementById("validation-input");
console.dir(validInputRef);
const inputValid = validInputRef.dataset.length;

validInputRef.addEventListener("blur", (event) => {
  return event.target.value.length == inputValid
    ? validInputRef.setAttribute("class", "valid")
    : validInputRef.setAttribute("class", "invalid");
});
