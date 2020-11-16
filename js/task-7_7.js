const inputControlRef = document.getElementById("font-size-control");
// console.dir(inputControlRef);
const spanSizeRef = document.getElementById("text");
// console.dir(spanSizeRef);
inputControlRef.addEventListener("input", () => {
  spanSizeRef.setAttribute("style", `font-size: ${inputControlRef.value}px`);
});
