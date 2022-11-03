import axios from 'axios';

const sellerRequest = async () => {
  const url = 'http://localhost:3001/seller';
  const seller = await axios.get(url).then((response) => response.data)
    .catch((error) => error.response.data);
  return seller;
};

const findSeller = async (name) => {
  const url = `http://localhost:3001/seller/${name}`;
  const seller = await axios.get(url).then((response) => response.data)
    .catch((error) => error.response.data);
  return seller;
};

const saleCreate = async (order) => {
  const url = 'http://localhost:3001/sales';
  const token = localStorage.getItem('user');
  const newSale = await axios.post(
    url,
    { ...order },
    { headers: { authorization: token } },
  ).then((response) => response.data)
    .catch((error) => error.response.data);
  return newSale;
};

export { sellerRequest, findSeller, saleCreate };
