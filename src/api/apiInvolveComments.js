const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'WJ94PTIw3sHPQ1asnzBz';

export const commentMovies = async (itemID, name, userComment) => {
  const req = await fetch(`${baseUrl}/${appId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username: name,
      comment: userComment,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await req.json();
  return res;
};

export const getComments = async (id) => {
  const req = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`);
  const res = await req.json();
  return res;
};
