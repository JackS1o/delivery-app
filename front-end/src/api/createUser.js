import axios from 'axios';
import backendEndpoints from '../helpers/backendEndpoints';

export default async (newUser, role, authorization) => {
  if (authorization) {
    const user = await axios({
      method: 'POST',
      url: `${backendEndpoints.adminRegister}?role=${role}`,
      data: { ...newUser },
      headers: { authorization },
    });
    return user;
  }
  const user = await axios({
    method: 'POST',
    url: `${backendEndpoints.register}?role=${role}`,
    data: { ...newUser },
  });
  return user;
};
