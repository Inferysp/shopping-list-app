import dragStart from './modules/dragStart';
import setToNormal from './modules/setToNormal';

export default function showByToggle(productsList,
  eachCategory, categoryArray, productsHolder, idx, clickedCat) {
  const lastClicked = document.querySelector(`.categories-drag-and-drop${clickedCat}`);
  lastClicked.className = 'categories-drag-and-drop';
  setToNormal(clickedCat);

  productsList[eachCategory.innerText].forEach((el) => {
    const eachProduct = document.createElement('div');
    eachProduct.innerText = `${el}`;
    eachProduct.id = `${el}-${categoryArray[idx]}`;
    eachProduct.className = 'products-drag-and-drop';
    eachProduct.draggable = true;
    productsHolder.appendChild(eachProduct);
    eachProduct.addEventListener('dragstart', dragStart);
  });
};