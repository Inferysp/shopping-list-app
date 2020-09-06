export default function countAllProducts() {
  let i = 0;
  const b = document.querySelector('.category-list-container');
  const countProducts = b.getElementsByTagName('p');
  i = countProducts.length;
  return i;
};