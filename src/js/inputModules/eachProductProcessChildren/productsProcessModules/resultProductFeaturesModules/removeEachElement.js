import countAllProducts from '../countModule/countAllProducts';

export default function removeEachElement(nextProduct, summary) {
  const removeEachElementReasult = () => {
    nextProduct.remove();
    const i = countAllProducts();
    summary.innerHTML = `<small>${i} from input</small>`;
  };
  nextProduct.addEventListener('click', removeEachElementReasult);
}