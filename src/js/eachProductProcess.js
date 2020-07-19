export default function eachProductProcess() {
    let categoryChoosed = null;
    // const deleteLastItemBtn = document.querySelector("#delete-all-id");
    const summary = document.querySelector(".summary-label");
    const choosedCategoryName = document.getElementById("category-selector");
    const categorySet = () => {
      switch (choosedCategoryName.value) {
        case "vegetables":
          categoryChoosed = "vegetables";
          break;
        case "fruits":
          categoryChoosed = "fruits";
          break;
        case "milk":
          categoryChoosed = "milk";
          break;
        case "baking":
          categoryChoosed = "baking";
          break;
        case "meat":
          categoryChoosed = "meat";
          break;
        case "sea-food":
          categoryChoosed = "sea-food";
          break;
        case "hygiene":
          categoryChoosed = "hygiene";
          break;
      }
      return categoryChoosed;
    };
    let i = 0;
    function putMeSomewhere(e) {
      function removeEachElement() {
        nextProduct.remove();
        i--;
        summary.innerText = `${i} prod.`;
      }
      console.log(i);
      e.preventDefault();
      categorySet();
      const destiny = document.querySelector(`.${categoryChoosed}-container`);
      let inputNumber = document.querySelector(".amount-item-input");
      let inputItem = document.querySelector(".item-name-input");
      let nextProduct = document.createElement("p");
      nextProduct.id = categoryChoosed + "-" + i;
      nextProduct.innerText = `${inputNumber.value} [piece] ${inputItem.value}`;
      destiny.appendChild(nextProduct);
      inputItem.value = "";
      inputNumber.value = "";
      i++;
      summary.innerText = `${i} prod.`;
  
      nextProduct.addEventListener("click", removeEachElement);
    }
    const btn = document.getElementById("btn");
    btn.addEventListener("click", putMeSomewhere);
  }
  