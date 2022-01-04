const movieCard = ({ item, likes }) => {
  const { image, id } = item;
  const movieLikes = likes.find((like) => like.item_id === id);

  return `<div class="card">
      <img src=${image?.original} class="movie-image" alt="cover"/>
      <div class="info-container">
      <i class="fa fa-heart" data-modal=${id}></i>
     <span class="like-span">${movieLikes ? movieLikes.likes : 0}</span>
      </div>
      <button class="comment" data-modal=${id}>Comment</button>
      <button data-modal=${id} type="button" class="reserve">Reservation</button>
      </div>`;
};

export default movieCard;
