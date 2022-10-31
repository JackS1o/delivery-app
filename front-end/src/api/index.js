import axios from 'axios';

const url = 'http://localhost:3001/';

const instance = axios.create({
  baseURL: url,
});

function requestApi(email, password) {
  return instance.post('login', { email, password });
  // .catch((error) => console.log(error));
}
export default requestApi;
