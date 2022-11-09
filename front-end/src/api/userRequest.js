import axios from 'axios';

const url = 'http://localhost:3001/users';

async function userRequest() {
  const result = await axios
    .get(url)
    .then((response) => response.data).catch((error) => error.response.data);
  return result;
}

export default userRequest;
