import showDate from "./showDate";
import shoppingListHolderAdd from "./listHolder";
import eachProductProcess from "./eachProductProcess";
import productsData from "./productsData/productsData";
import printListToPdf from "./printListToPdf";

const categoryArray = [
  "vegetables",
  "fruits",
  "milk",
  "baking",
  "meat",
  "seaFood",
  "hygiene",
];

showDate();
productsData(categoryArray);
shoppingListHolderAdd(categoryArray);
eachProductProcess(categoryArray);
printListToPdf();
