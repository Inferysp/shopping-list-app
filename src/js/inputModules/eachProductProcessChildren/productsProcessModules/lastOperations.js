import countAllProducts from './countModule/countAllProducts';

export default function lastOperations(summary) {
  let inputAmount = document.querySelector('.amount-item-input');
  let inputItem = document.querySelector('.item-name-input');
  inputAmount.value = '';
  inputItem.value = '';
  const i = countAllProducts();
  summary.innerHTML = `<small>${i} from input</small>`;
};