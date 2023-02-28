const body = document.body;
const categoriesItemsEls = body.firstElementChild.nextElementSibling.children;

console.log('Number of categories: ' + categoriesItemsEls.length);

const categoriesItems = [...categoriesItemsEls];

categoriesItems.forEach(el => {
 console.log(`Category: ${el.firstElementChild.textContent}`);
 console.log('Elements: ' + el.lastElementChild.children.length);
 })
