import categoryLoad from './resultProductFeaturesModules/categoryLoad';
import unitsSet from './resultProductFeaturesModules/unitsSet';
import removeEachElement from './resultProductFeaturesModules/removeEachElement';

export default function resultProductFeatures(categoryArray, summary, auxArray) {
  const inputAmount = document.querySelector('.amount-item-input');
  const inputItem = document.querySelector('.item-name-input');
  const unit = unitsSet();
  const categoryChoosed = categoryLoad();
  const nextProduct = document.createElement('p');
  const destiny = document.getElementById(`${categoryChoosed}-container`);
  const auxiliaryIndex = categoryArray.indexOf(categoryChoosed);
  auxArray[auxiliaryIndex] += 1;
  nextProduct.id = `${categoryChoosed}-${auxArray[auxiliaryIndex]}`;
  nextProduct.className = 'each-product-paragraph';
  nextProduct.innerHTML = `<small>${inputAmount.value} ${unit} ${inputItem.value}</small>`;
  destiny.appendChild(nextProduct);
  removeEachElement(nextProduct, summary);
}