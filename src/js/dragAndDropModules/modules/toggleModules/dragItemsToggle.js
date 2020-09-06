import showByToggle from './dragItemsToggleChildren/showByToggle';
import childrenRemove from './dragItemsToggleChildren/childrenRemove';
import chooseProductsList from './dragItemsToggleChildren/chooseProductsList';

export default function dragItemsToggle(productsList,
  categoryArray, categoriesHolder, productsHolder) {
  const clickedCat = '';
  categoryArray.forEach((element, idx) => {
    const eachCategory = document.createElement('div');
    eachCategory.innerText = `${element}`;
    eachCategory.className = 'categories-drag-and-drop';
    eachCategory.id = `${element}-${Math.floor(Math.random() * 100)}`;
    categoriesHolder.appendChild(eachCategory);
    showByToggle(productsList, eachCategory, categoryArray, productsHolder, idx, clickedCat);
    childrenRemove(productsHolder);
    chooseProductsList(productsList, eachCategory, categoryArray, productsHolder, clickedCat, idx);
  });
}