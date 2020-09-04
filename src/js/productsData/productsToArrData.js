import dragItemsToggle from "./dragItemsToggle";
import vegetables from "./eachCategoryData/vegetables";
import fruits from "./eachCategoryData/fruits";
import milk from "./eachCategoryData/milk";
import baking from "./eachCategoryData/baking";
import meat from "./eachCategoryData/meat";
import seaFood from "./eachCategoryData/seaFood";
import hygiene from "./eachCategoryData/hygiene";

export default function productsToArrData(categoryArray) {
  const productsList = {
    vegetables: vegetables(),
    fruits: fruits(),
    milk: milk(),
    baking: baking(),
    meat: meat(),
    seaFood: seaFood(),
    hygiene: hygiene(),
  };
  dragItemsToggle(productsList, categoryArray);
}
