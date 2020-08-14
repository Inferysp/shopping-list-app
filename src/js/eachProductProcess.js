import shoppingListHolderAdd from './listHolder';

export default function eachProductProcess(categoryArray) {
  const btn = document.getElementById('btn');
  const summary = document.querySelector('.summary-input-label');
  const shoppingList = document.querySelector('.shopping-list-container');
  const deleteBtn = document.querySelector('#delete-all-id');
  const choosedCategoryName = document.getElementById('cat-selector');
  const inputAmount = document.querySelector('.amount-item-input');
  const inputItem = document.querySelector('.item-name-input');

  let auxArray = [0, 0, 0, 0, 0, 0, 0];
  let categoryChoosed = null;
  let i = 0;
  let unit = null;

  const countAllProducts = () => {
    const b = document.querySelector('.category-list-container');
    const countProducts = b.getElementsByTagName('p');
    i = countProducts.length;
    return i;
  };

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

  const lastOperations = () => {
    inputAmount.value = null;
    inputItem.value = null;
    countAllProducts();
    summary.innerHTML = `<small>${i} from input</small>`;
  };

  const unitsSet = () => {
    unit = document.querySelector('input[name=units]:checked').value;
    return unit;
  };

  const productProcess = () => {
    categorySet();
    unitsSet();
    const nextProduct = document.createElement('p');
    const destiny = document.getElementById(`${categoryChoosed}-container`);
    const auxiliaryIndex = categoryArray.indexOf(categoryChoosed);
    auxArray[auxiliaryIndex] += 1;

    nextProduct.id = `${categoryChoosed}-${auxArray[auxiliaryIndex]}`;
    nextProduct.className = 'each-product-paragraph';
    nextProduct.innerHTML = `<small>${inputAmount.value} ${unit} ${inputItem.value}</small>`;

    destiny.appendChild(nextProduct);

    lastOperations();

    const removeEachElement = () => {
      nextProduct.remove();
      countAllProducts();
      summary.innerHTML = `<small>${i} from input</small>`;
    };

    nextProduct.addEventListener('click', removeEachElement);
  };

  const deleteAllProducts = () => {
    const categoryList = document.querySelector('.category-list-container');
    shoppingList.removeChild(categoryList);
    shoppingListHolderAdd(categoryArray);

    lastOperations();
    auxArray = [0, 0, 0, 0, 0, 0, 0];
  };

  deleteBtn.addEventListener('click', deleteAllProducts);
  btn.addEventListener('click', productProcess);
}
