export default function dropableProductProcess(el) {
  const summary = document.querySelector('.summary-dropped-elements');
  const dropZone = document.querySelector('.drop-zone');
  const deleteBtn = document.querySelector('#delete-all-id');
  const categoryArray = [
    'vegetables',
    'fruits',
    'milk',
    'baking',
    'meat',
    'sea-food',
    'hygiene',
  ];
  let auxDroppedArray = [0, 0, 0, 0, 0, 0, 0];
  let i = 0;
  let droppedElement = el;

  const countAllProducts = () => {
    const listContainer = document.querySelector('.category-list-container');
    const countSmallTags = listContainer.getElementsByTagName('small').length;
    const countPTags = listContainer.getElementsByTagName('p').length;
    i = countSmallTags - countPTags;
    return i;
  };

  const droppedProductAction = () => {
    const inputAmount = document.querySelector('.amount-item-input');
    const unit = document.querySelector('input[name=units]:checked').value;
    const itemCategoryName = droppedElement.substring(
      droppedElement.indexOf('-') + 1,
    );

    const productDroppedToList = document.createElement('small');
    const auxiliaryIndex = categoryArray.indexOf(itemCategoryName);
    const destinyDraggedItem = document.getElementById(
      `${itemCategoryName}-container`,
    );
    const categoryDiv = document.getElementById(
      `${itemCategoryName}-container`,
    );
    const itemTextSet = droppedElement.substring(
      0,
      droppedElement.indexOf('-'),
    );

    productDroppedToList.id = `${itemCategoryName}-${auxDroppedArray[auxiliaryIndex]}`;
    productDroppedToList.className = `${el}`;
    productDroppedToList.innerText = `${inputAmount.value} ${unit} ${itemTextSet}`;
    destinyDraggedItem.appendChild(productDroppedToList);

    auxDroppedArray[auxiliaryIndex] = categoryDiv.getElementsByTagName(
      'small',
    ).length;
    droppedElement = null;
    countAllProducts();
    summary.innerHTML = `<small>${i} dropped</small>`;

    const removeEachElement = (e) => {
      e.target.remove();
      countAllProducts();
      summary.innerHTML = `<small>${i} dropped</small>`;
      const element = document.getElementById(
        `${productDroppedToList.className}`,
      );
      dropZone.removeChild(element);
    };

    productDroppedToList.addEventListener('click', removeEachElement);
  };
  droppedProductAction();

  const childrenRemove = () => {
    while (dropZone.hasChildNodes()) {
      dropZone.removeChild(dropZone.firstChild);
    }
  };

  const deleteAllProductsInDropZone = () => {
    childrenRemove();
    dropZone.innerText = 'Drop Zone !!!';
    countAllProducts();
    summary.innerHTML = `<small>${i} dropped</small>`;
    auxDroppedArray = [0, 0, 0, 0, 0, 0, 0];
  };

  deleteBtn.addEventListener('click', deleteAllProductsInDropZone);
}
