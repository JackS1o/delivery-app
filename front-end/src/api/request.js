import axios from 'axios';

async function getProducts() {
  const result = await axios.get('http://localhost:3001/customer/products')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export async function getSales() {
  const result = await axios.get('http://localhost:3001/sales')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export async function getSalesById(id) {
  const result = await axios.get(`http://localhost:3001/sales/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export async function getSellerById(id) {
  const result = await axios.get(`http://localhost:3001/sellerName/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export default getProducts;
