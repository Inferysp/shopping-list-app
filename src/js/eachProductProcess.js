import shoppingListHolderAdd from './listHolder';

export default function eachProductProcess(categoryArray) {
  let categoryChoosed = null;
  let unit = null;
  let comma = '';
  let i = 0;
  let productsInCategoryArray = [0, 0, 0, 0, 0, 0, 0];
  const summary = document.querySelector('.summary-label');
  const choosedCategoryName = document.getElementById('category-selector');
  const shoppingList = document.querySelector('.shopping-list-container');

  const categorySet = () => {
    switch (choosedCategoryName.value) {
      case 'vegetables':
        categoryChoosed = 'vegetables';
        break;
      case 'fruits':
        categoryChoosed = 'fruits';
        break;
      case 'milk':
        categoryChoosed = 'milk';
        break;
      case 'baking':
        categoryChoosed = 'baking';
        break;
      case 'meat':
        categoryChoosed = 'meat';
        break;
      case 'sea-food':
        categoryChoosed = 'sea-food';
        break;
      case 'hygiene':
        categoryChoosed = 'hygiene';
        break;
      default:
        categoryChoosed = null;
    }
    return categoryChoosed;
  };

  const unitsSet = () => {
    unit = document.querySelector('input[name=units]:checked').value;
    return unit;
  };

  function putMeSomewhere() {
    const nextProduct = document.createElement('p');

    function removeEachElement() {
      nextProduct.remove();
      i -= 1;
      summary.innerText = `${i} prod.`;
      // checkIfCommaAfterProductRemoval();
    }

    categorySet();
    unitsSet();
    const destiny = document.getElementById(`${categoryChoosed}-container`);
    const inputNumber = document.querySelector('.amount-item-input');
    const inputItem = document.querySelector('.item-name-input');

    const productsInCategoryArrayIndex = categoryArray.indexOf(categoryChoosed);
    productsInCategoryArray[categoryArray.indexOf(categoryChoosed)] += 1;
    nextProduct.id = `${categoryChoosed}-${productsInCategoryArray[productsInCategoryArrayIndex]}`;
    nextProduct.className = 'each-product-paragraph';
    function productWithComaFunction() {
      comma = productsInCategoryArray[productsInCategoryArrayIndex] === 1 ? '' : ',';
    }
    productWithComaFunction();
    nextProduct.innerText = `${comma} ${inputNumber.value} ${unit} ${inputItem.value} `;
    destiny.appendChild(nextProduct);
    inputItem.value = '';
    inputNumber.value = '';
    i += 1;
    summary.innerText = `${i} prod.`;

    nextProduct.addEventListener('click', removeEachElement);

    function deleteAllProducts() {
      const categoryList = document.querySelector('.category-list-container');
      shoppingList.removeChild(categoryList);
      shoppingListHolderAdd(categoryArray);
      i = 0;
      summary.innerText = `${i} prod.`;
      productsInCategoryArray = [0, 0, 0, 0, 0, 0, 0];
    }

    const deleteBtn = document.querySelector('#delete-all-id');
    deleteBtn.addEventListener('click', deleteAllProducts);
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('click', putMeSomewhere);
}
