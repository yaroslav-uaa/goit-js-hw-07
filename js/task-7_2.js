const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const ingrediendItems = ingredients.map((elem) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = elem;
  return ingredientItem;
  // console.log(ingredientItem);
  // console.log(elem);
});
// однією дією
ingredientsList.append(...ingrediendItems);
