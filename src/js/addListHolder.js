export default function addListHolder(categoryArray) {
  const shoppingListContainer = document.querySelector(
    '.shopping-list-container',
  );
  const categoryContainer = document.createElement('div');
  categoryContainer.className = 'category-list-container';
  shoppingListContainer.appendChild(categoryContainer);
  categoryArray.forEach((element) => {
    const eachCategoryBox = document.createElement('div');
    eachCategoryBox.innerHTML = `<strong>${element}:</strong>`;
    eachCategoryBox.className = 'category-container';
    eachCategoryBox.id = `${element}-container`;
    categoryContainer.appendChild(eachCategoryBox);
  });
}
