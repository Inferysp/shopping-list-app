import JsPDF from 'jspdf';

export default function printListToPdf() {
  const toPdfBtn = document.getElementById('print-shopping-list');
  const date = document.querySelector('.day-date-meta');
  const list = document.querySelector('.shopping-list-container');
  const createListPdf = () => {
    const doc = new JsPDF();
    doc.text(`${list.innerText}`, 10, 10);
    doc.save(`shopping-list-${date.innerText}.pdf`);
  };
  toPdfBtn.addEventListener('click', createListPdf);
}
