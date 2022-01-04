const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'WJ94PTIw3sHPQ1asnzBz';

export const interactions = async () => {
  const req = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({ name: 'userData' }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await req.json();
  return res;
};

export const likePost = async (itemID) => {
  const req = await fetch(`${baseUrl}/${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemID }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await req.json();
  return res;
};

export const getLikesNumber = async () => {
  const req = await fetch(`${baseUrl}/${appId}/likes`);
  const res = await req.json();
  return res;
};
