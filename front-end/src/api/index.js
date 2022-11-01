import axios from 'axios';

const url = 'http://localhost:3001/login';

async function requestApi({ email, password }) {
  const result = await axios
    .post(url, { email, password })
    .then((response) => response.data).catch((error) => error.response.data);
  return result;
}

export default requestApi;
