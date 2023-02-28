const listCategoriesEl = document.querySelectorAll('.item');

console.log('Number of categories: ' + listCategoriesEl.length);

listCategoriesEl.forEach((el) => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log('Elements: ' + el.querySelectorAll('ul>li').length);
})
