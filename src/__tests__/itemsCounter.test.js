import itemsCounter from '../utils/itemsCounter.js';
import itemsVirtualDom from '../__mocks__/itemMocks.js';

itemsVirtualDom();

describe('test get items count function', () => {
  test('add test for items Count', () => {
    const container = document.getElementById('container');
    const movieCard = `<div class="card">
    <img src="#" class="movie-image" alt="cover"/>
    <div class="info-container">
    <i class="fa fa-heart"></i>
   <span class="like-span"></span>
    </div>
    <button class="comment">Comment</button>
    <button type="button" class="reserve">Reservation</button>
    </div>`;
    container.innerHTML += movieCard;

    const childrenEle = itemsCounter(container);
    expect(childrenEle).toBe(1);
  });
});
