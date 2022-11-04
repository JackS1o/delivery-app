import axios from 'axios';
import backendEndpoints from '../helpers/backendEndpoints';

export default async (sellerId) => {
  const result = await axios
    .get(`${backendEndpoints.sales}/${sellerId}`)
    .then((response) => response.data).catch((error) => error.response.data);
  return result;
};
