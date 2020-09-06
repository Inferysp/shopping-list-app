import dragAndDrop from './toggleModules/dragAndDrop';
import dragItemsToggle from './toggleModules/dragItemsToggle';

export default function toggleIndex(productsList, categoryArray) {
  const categoriesHolder = document.querySelector('.categories-drag-and-drop-container');
  const productsHolder = document.querySelector('.possible-products-names');
  dragAndDrop();
  dragItemsToggle(productsList, categoryArray, categoriesHolder, productsHolder);
}
