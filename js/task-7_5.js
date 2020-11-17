const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");
console.dir(inputRef);
console.dir(spanRef);
inputRef.addEventListener("input", (event) => {
  inputRef.value = event.target.value.split(" ").join("");

  spanRef.textContent =
    event.target.value === "" ? "незнайомець" : event.target.value;
});
console.log(spanRef);
