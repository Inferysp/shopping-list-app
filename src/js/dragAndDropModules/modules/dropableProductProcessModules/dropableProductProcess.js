import deleteAllProductsInDropZone from './dppModules/deleteAllProductsInDropZone';
import categoryList from '../../../../categoryList';
import droppedProductAction from './dppModules/droppedProductAction';

export default function dropableProductProcess(el) {
  const summary = document.querySelector(".summary-dropped-elements");
  const dropZone = document.querySelector(".drop-zone");
  const categoryArray = categoryList();
  let auxDroppedArray = [0, 0, 0, 0, 0, 0, 0];
  let droppedElement = el;

  droppedProductAction(droppedElement, summary, categoryArray, auxDroppedArray, dropZone);
  deleteAllProductsInDropZone(dropZone, auxDroppedArray);
}
