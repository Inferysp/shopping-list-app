export default function categoryLoad() {
  const choosedCategoryName = document.getElementById('cat-selector');
  const categoryChoosed = choosedCategoryName.value;
  return categoryChoosed;
}