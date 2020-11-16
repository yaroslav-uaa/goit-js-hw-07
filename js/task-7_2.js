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

ingredients.map((elem) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = elem;
  ingredientsList.append(ingredientItem);
  // console.log(ingredientItem);
  // console.log(elem);
});
