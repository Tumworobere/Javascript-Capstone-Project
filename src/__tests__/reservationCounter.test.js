import reservationCounter from '../utils/reservationCount.js';
import reservationsVirtualDom from '../__mocks__/reservationMocks.js';

reservationsVirtualDom();

describe('test get reservations count function', () => {
  test('add test for reservations Count', () => {
    const reservationsContainer = document.getElementById('reservations');
    const reservation = `<div class="commnet-row">
    <span>Ahmed</span>
    <span>25-12-2020</span>
    <span>24-12-2021</span>
    </div>`;
    reservationsContainer.innerHTML += reservation;

    const childrenEle = reservationCounter(reservationsContainer);
    expect(childrenEle).toBe(1);
  });
});
