const listCategoriesEl = document.querySelectorAll('.item');

console.log('Number of categories: ' + listCategoriesEl.length);

for (let el of listCategoriesEl){
  const categoryNameEl = el.querySelector('h2').textContent;
  const categoryNumberItems = el.querySelectorAll('ul>li').length;

  console.log(`Category: ${categoryNameEl}`);
  console.log('Elements: ' + categoryNumberItems);
}
