export default function unitsSet() {
  const unit = document.querySelector('input[name=units]:checked').value;
  return unit;
};