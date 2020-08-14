import dragAndDrop from './dragAndDrop';

export default function dragItemsToggle(e, categoryArray) {
  const categoriesHolder = document.querySelector(
    '.categories-drag-and-drop-container',
  );
  const productsHolder = document.querySelector('.possible-products-names');
  let clickedCat = '';

  const setToClicked = () => {
    clickedCat = '-clicked';
  };

  const setToNormal = () => {
    clickedCat = '';
  };

  dragAndDrop();
  const dragstart = (ev) => {
    const event = ev;
    event.dataTransfer.dropEffect = 'copy';
    event.dataTransfer.setData('text', ev.target.id);
  };

  categoryArray.forEach((element, idx) => {
    const eachCategory = document.createElement('div');
    eachCategory.innerText = `${element}`;
    eachCategory.className = 'categories-drag-and-drop';
    eachCategory.id = `${element}-${Math.floor(Math.random() * 100)}`;
    categoriesHolder.appendChild(eachCategory);

    const showByToggle = () => {
      const lastClicked = document.querySelector(
        `.categories-drag-and-drop${clickedCat}`,
      );
      lastClicked.className = 'categories-drag-and-drop';
      setToNormal();

      e[idx].forEach((el) => {
        const eachProduct = document.createElement('div');
        eachProduct.innerText = `${el}`;
        eachProduct.id = `${el}-${categoryArray[idx]}`;
        eachProduct.className = 'products-drag-and-drop';
        eachProduct.draggable = true;
        productsHolder.appendChild(eachProduct);
        eachProduct.addEventListener('dragstart', dragstart);
      });
    };

    const childrenRemove = () => {
      while (productsHolder.hasChildNodes()) {
        productsHolder.removeChild(productsHolder.firstChild);
      }
    };

    const chooseProductsList = (ev) => {
      childrenRemove();
      const event = ev;
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
