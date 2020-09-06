import showByToggle from './showByToggle';
import childrenRemove from './childrenRemove';
import setToClicked from './modules/setToClicked';
import setToNormal from './modules/setToNormal';

export default function chooseProductsList(productsList,
  eachCategory, categoryArray, productsHolder, clickedCat, idx) {
  const categoryClickReaction = (ev) => {
    childrenRemove(productsHolder);
    const event = ev;
    if (event.target.className === 'categories-drag-and-drop-clicked') {
      event.target.className = 'categories-drag-and-drop';
      childrenRemove(productsHolder);
      setToNormal(clickedCat);
    } else {
      showByToggle(productsList, eachCategory, categoryArray, productsHolder, idx, clickedCat);
      setToClicked(clickedCat);
      event.target.className = 'categories-drag-and-drop-clicked';
    }
  };
  eachCategory.addEventListener('click', categoryClickReaction);
};
