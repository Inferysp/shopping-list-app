import addListHolder from './addListHolder';
import eachProductProcess from './inputModules/eachProductProcess';
import productsDataAndToggle from './dragAndDropModules/productsDataAndToggle';
import printListToPdf from './printListToPdf';
import showDate from './showDate';
import categoryList from './categoryList';

const categoryArray = categoryList();

addListHolder(categoryArray);
eachProductProcess(categoryArray);
productsDataAndToggle(categoryArray);
printListToPdf();
showDate();
