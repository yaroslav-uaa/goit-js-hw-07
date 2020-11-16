const categoriesRef = document.querySelectorAll("li.item");
console.log(`у списку ${categoriesRef.length} категорія.`);
categoriesRef.forEach((el) => {
  console.log(`Категорія: ${el.firstElementChild.textContent}`);
  console.log(`Кількість елементів: ${el.lastElementChild.children.length}`);
});
