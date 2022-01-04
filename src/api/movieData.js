const baseUrl = ' https://api.tvmaze.com/shows';

export const getData = async () => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  return res.slice(0, 52);
};

export const getSpecificMovie = async (id) => {
  const req = await fetch(`${baseUrl}/${id}`);
  const res = await req.json();
  return res;
};
