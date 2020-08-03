import moment from 'moment';

export default function showDate() {
  const day = moment().format('dddd ll');
  const date = document.querySelector('.title-container');
  const dateElem = document.createElement('p');
  dateElem.className = 'day-date-meta';
  dateElem.innerText = day;
  date.append(dateElem);
}
