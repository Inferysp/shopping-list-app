export default function shoppingListHolderAdd(categoryArray) {
  const shoppingListContainer = document.querySelector('.shopping-list-container');
  const categoryContainer = document.createElement('div');
  categoryContainer.className = 'category-list-container';
  shoppingListContainer.appendChild(categoryContainer);
  categoryArray.forEach((element) => {
    const eachCategoryBox = document.createElement('div');
    eachCategoryBox.innerText = `${element}:`;
    eachCategoryBox.className = 'category-container';
    eachCategoryBox.id = `${element}-container`;
    categoryContainer.appendChild(eachCategoryBox);
  });
}
