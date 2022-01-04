import { getLikesNumber, likePost } from '../api/apiInvolveLikes.js';
import { getData } from '../api/movieData.js';
import movieCard from '../components/card.js';
import itemsCounter from './itemsCounter.js';
import onOpenModal from './openCommentModal.js';
import onOpenReservationModal from './pop-up.js';

const container = document.querySelector('.container');
const count = document.querySelector('.items-count');

const displayData = () => {
  getData().then((items) => {
    getLikesNumber().then((likes) => {
      items.forEach((item) => {
        container.innerHTML += movieCard({ item, likes });
      });
      if (container.children) {
        const children = itemsCounter(container);
        count.innerHTML = `${children} &nbsp; items listed`;
      }

      document.querySelectorAll('.fa-heart').forEach((button) => {
        button.addEventListener('click', async () => {
          try {
            likePost(Number(button.dataset.modal));
          } catch (err) {
            throw new Error('Error in fetching data');
          }
          setTimeout(() => {
            window.location.reload(1);
          }, 1500);
        });
      });

      document.querySelectorAll('.comment').forEach((button) => {
        button.addEventListener('click', () => {
          onOpenModal(button.dataset.modal);
        });
      });
      document.querySelectorAll('.reserve').forEach((button) => {
        button.addEventListener('click', () => {
          onOpenReservationModal(button.dataset.modal);
        });
      });
    });
  });
};

export default displayData;
