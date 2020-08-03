export default function dragAndDrop() {
  const dropZone = document.getElementById('target');

  function dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
  }

  function drop(ev) {
    dropZone.innerHTML = dropZone.innerText === 'Drop Zone !!!' ? null : dropZone.innerHTML;
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }
  dropZone.addEventListener('drop', drop);
  dropZone.addEventListener('dragover', dragOver);
}
