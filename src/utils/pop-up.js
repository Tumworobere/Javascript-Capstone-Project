import { reservationMovies, getReservations } from '../api/apiinvolveres.js';
import { getSpecificMovie } from '../api/movieData.js';
import reservationCounter from './reservationCount.js';

const modal = document.querySelector('#resmodal');
const closeButton = document.querySelector('#res-modalCloseButton');
const reservationForm = document.getElementById('reservation-form');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const nameInput = document.getElementById('res-name');

const onOpenReservationModal = (id) => {
  getSpecificMovie(id).then((item) => {
    document.body.style.overflow = 'hidden';
    const thumbnail = new Image();
    thumbnail.src = item.image.original;
    const modalTitle = document.getElementById('res-modalTitle');
    const modalImage = document.getElementById('res-thumbnail');
    const info1 = document.querySelector('.res-info1');
    const info2 = document.querySelector('.res-info2');
    const info3 = document.querySelector('.res-info3');
    const info4 = document.querySelector('.res-info4');
    const reservation = document.getElementById('reservations');
    const reservationTitle = document.querySelector('.reservations-title');
    modalImage.appendChild(thumbnail);
    modalTitle.innerText = item?.name;
    info1.innerHTML = `Language :${item.language}`;
    info2.innerHTML = `Rating :${item.rating.average}`;
    info3.innerHTML = `Status :${item.status}`;
    info4.innerHTML = `Run Time :${item.averageRuntime} min`;

    modal.style.display = 'block';
    getReservations(id).then((items) => {
      items.map((item) => {
        const reservationFormat = `<div class='reserve-row'>
        <span>${item.username} &ensp;</span>
        <span>start :${item.date_start}&ensp;</span>
        <span>end :${item.date_end}</span>
        </div>`;
        return reservation.insertAdjacentHTML('beforeend', reservationFormat);
      });
      const reservationCount = reservationCounter(reservation);
      reservationTitle.innerHTML = `reservations (${reservationCount})`;
    });

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameInput.value && startDateInput.value && endDateInput.value) {
        try {
          reservationMovies(
            id,
            nameInput.value,
            startDateInput.value,
            endDateInput.value,
          );
          nameInput.value = '';
          startDateInput.value = '';
          endDateInput.value = '';
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert('you should re-open movie modal to see your reservation');
          }, 1000);
        } catch (err) {
          throw new Error('Error in fetching data');
        }
      }
    });
  });
};

closeButton.addEventListener('click', () => {
  document.body.style.overflow = 'visible';
  modal.style.display = 'none';
  window.location.reload();
});

export default onOpenReservationModal;
