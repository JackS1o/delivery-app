import axios from 'axios';

const sellerOrder = async (id) => {
  const url = `http://localhost:3001/sales/${id}`;
  const order = await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return order;
};

const sellerProducts = async (id) => {
  const url = `http://localhost:3001/salesProducts/${id}`;
  const products = await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return products;
};

const orderStatus = async (id, status) => {
  const url = `http://localhost:3001/sales/${id}`;
  const order = await axios
    .put(url, { status })
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return order;
};

export {
  sellerOrder,
  sellerProducts,
  orderStatus,
};
