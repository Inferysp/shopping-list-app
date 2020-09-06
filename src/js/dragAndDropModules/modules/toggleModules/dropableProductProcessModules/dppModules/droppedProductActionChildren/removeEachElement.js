import countAllDroppedProducts from '../countAllDroppedProducts';

export default function removeEachElement(summary, productDroppedToList, dropZone) {
  const removeEachElementResult = (e) => {
    e.target.remove();
    const i = countAllDroppedProducts();
    summary.innerHTML = `<small>${i} dropped</small>`;
    const element = document.getElementById(
      `${productDroppedToList.className}`
    );
    dropZone.removeChild(element);
  };

  productDroppedToList.addEventListener("click", removeEachElementResult);
}