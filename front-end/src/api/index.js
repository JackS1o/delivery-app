const url = 'http://localhost:3001/';

async function requestApi() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export default requestApi;
