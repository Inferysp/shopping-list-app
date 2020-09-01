import "../scss/index.scss";
import showDate from "./showDate";
import shoppingListHolderAdd from "./listHolder";
import eachProductProcess from "./eachProductProcess";
import productsData from "./productsData";
import printListToPdf from "./printListToPdf";
import rememberSesionList from "./rememberSesionList";

const categoryArray = [
  "vegetables",
  "fruits",
  "milk",
  "baking",
  "meat",
  "sea-food",
  "hygiene",
];

showDate();
productsData(categoryArray);
shoppingListHolderAdd(categoryArray);
eachProductProcess(categoryArray);
printListToPdf();
rememberSesionList();
