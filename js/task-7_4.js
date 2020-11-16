const counterSpan = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(counterSpan);
// console.log(decrementBtn);
// console.log(incrementBtn);

let counterValue = 0;
counterSpan.textContent = counterValue;
decrementBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    // console.log(counterValue);
    counterValue -= 1;
    // console.log(counterValue);
    counterSpan.textContent = counterValue;
  }
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
});
