const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");
console.dir(inputRef);
console.dir(spanRef);
inputRef.addEventListener("input", (event) => {
  inputRef.value = event.target.value;

  spanRef.textContent =
    event.target.value === "" ? "незнайомець" : event.target.value.trim();
});
console.log(spanRef);
