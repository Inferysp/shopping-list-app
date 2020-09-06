import removeEachElement from './droppedProductActionChildren/removeEachElement';
import dragAndDropLastOperation from './droppedProductActionChildren/dragAndDropLastOperation';

export default function droppedProductAction(droppedElement,
  summary, categoryArray, auxDroppedArray, dropZone) {
  const inputAmount = document.querySelector(".amount-item-input");
  const unit = document.querySelector("input[name=units]:checked").value;
  const itemCategoryName = droppedElement.substring(droppedElement.indexOf("-") + 1);
  const productDroppedToList = document.createElement("small");
  const auxiliaryIndex = categoryArray.indexOf(itemCategoryName);
  const destinyDraggedItem = document.getElementById(`${itemCategoryName}-container`);
  const categoryDiv = document.getElementById(`${itemCategoryName}-container`);
  const itemTextSet = droppedElement.substring(0, droppedElement.indexOf("-"));
  dragAndDropLastOperation(inputAmount, summary,
    unit, itemCategoryName, productDroppedToList,
    auxiliaryIndex, destinyDraggedItem, categoryDiv,
    itemTextSet, auxDroppedArray, droppedElement);
  removeEachElement(summary, productDroppedToList, dropZone);
};
