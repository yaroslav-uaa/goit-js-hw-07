const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");
// console.log(inputRef);
// console.log(spanRef);
inputRef.addEventListener("input", (event) => {
  event.target.value === ""
    ? (spanRef.textContent = "незнайомець")
    : (spanRef.textContent = event.target.value);
});
console.log(spanRef);
