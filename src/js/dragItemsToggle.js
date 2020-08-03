import dragAndDrop from './dragAndDrop';
export default function dragItemsToggle(e, categoryArray) {
  const categoriesHolder = document.querySelector('.categories-drag-and-drop-container');
  const productsHolder = document.querySelector('.possible-products-names');
  let clickedCat = '';

  function setToClicked() {
    clickedCat = '-clicked';
  }

  function setToNormal() {
    clickedCat = '';
  }

  categoryArray.forEach((element, idx) => {
    const eachCategory = document.createElement('div');
    eachCategory.innerText = `${element}`;
    eachCategory.className = 'categories-drag-and-drop';
    eachCategory.id = `${element}-${Math.floor(Math.random()*100)}`;
    categoriesHolder.appendChild(eachCategory);

    function showByToggle() {
      const lastClicked = document.querySelector(`.categories-drag-and-drop${clickedCat}`);
      lastClicked.className = 'categories-drag-and-drop';
      setToNormal();

      dragAndDrop();
      function dragstart(ev) {
        ev.dataTransfer.dropEffect = 'copy';
        ev.dataTransfer.setData('text', ev.target.id);
      }

      e[idx].forEach((el) => {
        const eachProduct = document.createElement('div');
        eachProduct.innerText = `${el}`;
        eachProduct.id = `${el}-id`;
        eachProduct.className = 'products-drag-and-drop';
        eachProduct.draggable = true;
        productsHolder.appendChild(eachProduct);
        eachProduct.addEventListener('dragstart', dragstart);
      });
    }

    function childrenRemove() {
      while (productsHolder.hasChildNodes()) {
        productsHolder.removeChild(productsHolder.firstChild);
      }
    }

    const chooseProductsList = (event) => {
      childrenRemove();
      //Usuwanie po 2 kliknięciu w ten sam element.
      if (event.target.className === 'categories-drag-and-drop-clicked') {
        event.target.className = 'categories-drag-and-drop';
        childrenRemove();
        setToNormal();
      } else {
        showByToggle();
        setToClicked();
        event.target.className = 'categories-drag-and-drop-clicked';
      }
    };

    eachCategory.addEventListener('click', chooseProductsList);
  });
}