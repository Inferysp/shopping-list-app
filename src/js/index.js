import showDate from './showDate';
import shoppingListHolderAdd from './listHolder';
import eachProductProcess from './eachProductProcess';
import productsData from './productsData';
import printListToPdf from './printListToPdf';

const categoryArray = [
  'vegetables',
  'fruits',
  'milk',
  'baking',
  'meat',
  'sea-food',
  'hygiene',
];

showDate();
productsData(categoryArray);
eachProductProcess(categoryArray);
shoppingListHolderAdd(categoryArray);
printListToPdf();
