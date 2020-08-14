export default function rememberSesionList() {
  const ob = { one: 1, two: 2, three: 3 };
  localStorage.setItem('Element', JSON.stringify(ob));

  // console.log(JSON.parse(localStorage.getItem('Element')));

  localStorage.setItem(
    'myElement',
    JSON.stringify(document.querySelector('.shopping-list-container').innerText),
  );

  // const retrievedOcject = localStorage.getItem('myElement');
  // console.log(JSON.parse(retrievedOcject));
}
