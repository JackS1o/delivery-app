import axios from 'axios';

async function getSalesById(id) {
  const result = await axios.get(`http://localhost:3001/sales/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export default {
  getSalesById,
};
