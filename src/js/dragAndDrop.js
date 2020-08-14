import dropableProductProcess from './dropableProductProcess';

export default function dragAndDrop() {
  const dropZone = document.getElementById('target');

  const dragOver = (ev) => {
    ev.preventDefault();
    const event = ev;
    event.dataTransfer.dropEffect = 'move';
  };

  const drop = (ev) => {
    dropZone.innerHTML = dropZone.innerText === 'Drop Zone !!!' ? null : dropZone.innerHTML;
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    dropableProductProcess(ev.target.lastChild.id);
  };

  dropZone.addEventListener('drop', drop);
  dropZone.addEventListener('dragover', dragOver);
}
