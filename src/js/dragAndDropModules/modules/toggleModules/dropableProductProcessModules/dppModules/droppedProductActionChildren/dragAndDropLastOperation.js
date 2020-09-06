import countAllDroppedProducts from '../countAllDroppedProducts';

export default function dragAndDropLastOperation(inputAmount, summary,
  unit, itemCategoryName, productDroppedToList,
  auxiliaryIndex, destinyDraggedItem, categoryDiv,
  itemTextSet, auxDroppedArray, droppedElement) {
  productDroppedToList.id = `${itemCategoryName}-${auxDroppedArray[auxiliaryIndex]}`;
  productDroppedToList.className = `${droppedElement}`;
  productDroppedToList.innerText = `${inputAmount.value} ${unit} ${itemTextSet}`;
  destinyDraggedItem.appendChild(productDroppedToList);
  auxDroppedArray[auxiliaryIndex] = categoryDiv.getElementsByTagName(
    "small"
  ).length;
  droppedElement = null;
  const i = countAllDroppedProducts();
  summary.innerHTML = `<small>${i} dropped</small>`;
}