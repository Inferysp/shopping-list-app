import addListHolder from '../../addListHolder';

export default function deleteAllProducts(categoryArray, auxArray, summary) {
  const shoppingList = document.querySelector('.shopping-list-container');
  const deleteBtn = document.querySelector('#delete-all-id');
  const deleteBtnReaction = () => {
    const categoryList = document.querySelector('.category-list-container');
    shoppingList.removeChild(categoryList);
    addListHolder(categoryArray);
    auxArray = [0, 0, 0, 0, 0, 0, 0];
    const i = 0;
    summary.innerHTML = `<small>${i} from input</small>`;
  };
  deleteBtn.addEventListener('click', deleteBtnReaction);
}