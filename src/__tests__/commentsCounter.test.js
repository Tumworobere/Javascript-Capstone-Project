import commentsCounter from '../utils/commentsCounter.js';
import commentsVirtualDom from '../__mocks__/commentsMocks.js';

commentsVirtualDom();

describe('test get comments count function', () => {
  test('add test for comments Count', () => {
    const commentsContainer = document.getElementById('comments');
    const comment = `<div class="commnet-row">
    <span>25-12-2020</span>
    <span>Ahmed</span>
    <span>test</span>
    </div>`;
    commentsContainer.innerHTML += comment;

    const childrenEle = commentsCounter(commentsContainer);
    expect(childrenEle).toBe(1);
  });
});
