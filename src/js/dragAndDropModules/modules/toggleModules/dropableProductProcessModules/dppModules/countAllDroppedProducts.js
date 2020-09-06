export default function countAllDroppedProducts() {
  let i = 0;
  const listContainer = document.querySelector(".category-list-container");
  const countSmallTags = listContainer.getElementsByTagName("small").length;
  const countPTags = listContainer.getElementsByTagName("p").length;
  i = countSmallTags - countPTags;
  return i;
};