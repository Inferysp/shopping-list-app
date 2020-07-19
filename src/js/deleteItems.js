import shoppingListHolderAdd from './listHolder';
export default function deleteItems() {
    function deleteAllProducts() {
        const categoryList = document.querySelector('.category-list-container');
        const summary = document.querySelector(".summary-label");
        shoppingList.removeChild(categoryList);
        shoppingListHolderAdd();
        summary.innerText = 'products summary';
    }
    const deleteBtn = document.querySelector('#delete-all-id');
    const shoppingList = document.querySelector('.shopping-list-container');
    deleteBtn.addEventListener("click", deleteAllProducts);
}