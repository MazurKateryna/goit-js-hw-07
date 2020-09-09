const categoriesRef = document.querySelector('#categories');
const categiriesItem = document.querySelectorAll('.item');
console.log(`В списке ${categiriesItem.length} категории.`);

categiriesItem.forEach((node) => {
 const titleRef = node.querySelector('h2');
 const itemLi = node.querySelectorAll('li');
 console.log(`Категория: ${titleRef.textContent}`)
 console.log(`Количество элементов: ${itemLi.length}`);
}
)