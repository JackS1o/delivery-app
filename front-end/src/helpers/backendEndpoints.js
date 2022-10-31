const BACKEND_HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

const BASE_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;

export default {
  register: `${BASE_URL}/register`,
};
