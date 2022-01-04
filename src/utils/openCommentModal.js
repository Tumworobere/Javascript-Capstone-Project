import { commentMovies, getComments } from '../api/apiInvolveComments.js';
import { getSpecificMovie } from '../api/movieData.js';
import commentsCounter from './commentsCounter.js';

const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#modalCloseButton');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('insights');
const nameInput = document.getElementById('name');

const onOpenModal = (id) => {
  getSpecificMovie(id).then((item) => {
    document.body.style.overflow = 'hidden';
    const thumbnail = new Image();
    thumbnail.src = item.image.original;
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('thumbnail');
    const info1 = document.querySelector('.info1');
    const info2 = document.querySelector('.info2');
    const info3 = document.querySelector('.info3');
    const info4 = document.querySelector('.info4');
    const comment = document.getElementById('comments');
    const commentTitle = document.querySelector('.comments-title');
    modalImage.appendChild(thumbnail);
    modalTitle.innerText = item?.name;
    info1.innerHTML = `Language :${item.language}`;
    info2.innerHTML = `Rating :${item.rating.average}`;
    info3.innerHTML = `Status :${item.status}`;
    info4.innerHTML = `Run Time :${item.averageRuntime} min`;

    modal.style.display = 'block';
    getComments(id).then((items) => {
      items.map((item) => {
        const commentFormat = `<div class="commnet-row">
        <span>${item.creation_date}</span>
        <span>${item.username}:</span>
        <span>${item.comment}</span>
        </div>`;
        return comment.insertAdjacentHTML('beforeend', commentFormat);
      });
      const commentsLength = commentsCounter(comment);
      commentTitle.innerHTML = `Comments (${commentsLength})`;
    });

    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameInput.value && commentInput.value) {
        try {
          commentMovies(id, nameInput.value, commentInput.value);
          nameInput.value = '';
          commentInput.value = '';
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert('you should re-open movie modal to see your comment');
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

export default onOpenModal;
