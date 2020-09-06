import deleteAllProducts from './eachProductProcessChildren/deleteAllProducts';
import lastOperations from './eachProductProcessChildren/productsProcessModules/lastOperations';
import productProcess from './eachProductProcessChildren/productProcess';

export default function eachProductProcess(categoryArray) {
  const summary = document.querySelector('.summary-input-label');
  let auxArray = [0, 0, 0, 0, 0, 0, 0];
  lastOperations(summary);
  productProcess(categoryArray, summary, auxArray);
  deleteAllProducts(categoryArray, auxArray, summary);
}
