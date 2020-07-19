export default function shoppingListHolderAdd() {
    const shoppingListContainer = document.querySelector(".shopping-list-container");
    const categoryArray = [
      "vegetables",
      "fruits",
      "milk",
      "baking",
      "meat",
      "sea-food",
      "hygiene",
    ];
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category-list-container';
    shoppingListContainer.appendChild(categoryContainer);
    categoryArray.forEach((element) => {
      let eachCategoryBox = document.createElement("div");
      eachCategoryBox.innerText = `${element}:`;
      eachCategoryBox.className = `${element}-container`;
      categoryContainer.appendChild(eachCategoryBox);
    });
  }
  