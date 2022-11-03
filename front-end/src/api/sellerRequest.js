import axios from 'axios';

const sellerRequest = async () => {
  const url = 'http://localhost:3001/seller';
  const seller = await axios.get(url).then((response) => response.data)
    .catch((error) => error.response.data);
  return seller;
};

export default sellerRequest;
