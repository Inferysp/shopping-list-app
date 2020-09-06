export default function dropZoneProductsRemove(dropZone) {
  while (dropZone.hasChildNodes()) {
    dropZone.removeChild(dropZone.firstChild);
  }
};