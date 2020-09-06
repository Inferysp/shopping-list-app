import dropZoneProductsRemove from './dropZoneProductsRemoveModule/dropZoneProductsRemove';

export default function deleteAllProductsInDropZone(dropZone, auxDroppedArray) {
  const deleteBtn = document.querySelector("#delete-all-id");
  const summary = document.querySelector(".summary-dropped-elements");
  const deleteAllProductsInDropZoneResult = () => {
    dropZoneProductsRemove(dropZone);
    dropZone.innerText = "Drop Zone !!!";
    const i = 0;
    summary.innerHTML = `<small>${i} dropped</small>`;
    auxDroppedArray = [0, 0, 0, 0, 0, 0, 0];
  };

  deleteBtn.addEventListener("click", deleteAllProductsInDropZoneResult);
}
