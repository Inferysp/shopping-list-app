export default function childrenRemove(productsHolder) {
  while (productsHolder.hasChildNodes()) {
    productsHolder.removeChild(productsHolder.firstChild);
  }
};