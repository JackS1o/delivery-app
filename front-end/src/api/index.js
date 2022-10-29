import axios from 'axios';

const url = 'http://localhost:3001/';

// async function requestApi(email, password) {
//   try {
//     const data = await fetch(url, {
//       method: 'POST',
//       headers: { 'Access-Control-Allow-Origin': '*' },
//       body: JSON.stringify({ email, password }),
//     });
//     const response = await data.json();
//     return response;
//   } catch { console.log(); }
// }
const instance = axios.create({
  baseURL: url,
});

function requestApi(email, password) {
  return instance.post('login', { email, password });
  // .catch((error) => console.log(error));
}
export default requestApi;
