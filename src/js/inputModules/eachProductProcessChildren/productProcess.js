import lastOperations from './productsProcessModules/lastOperations';
import resultProductFeatures from './productsProcessModules/resultProductFeatures';

export default function productProcess(categoryArray, summary, auxArray) {
  const btn = document.getElementById('btn');
  const productProcessResult = () => {
    resultProductFeatures(categoryArray, summary, auxArray);
    lastOperations(summary);
  };
  btn.addEventListener('click', productProcessResult);
}