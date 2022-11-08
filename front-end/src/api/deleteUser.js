import axios from 'axios';
import backendEndpoints from '../helpers/backendEndpoints';

export default async (id, authorization) => {
  const res = await axios({
    method: 'DELETE',
    url: `${backendEndpoints.adminDelete}${id}`,
    headers: { authorization },
  });
  return res.data.message;
};
