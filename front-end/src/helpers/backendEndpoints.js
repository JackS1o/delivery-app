const BASE_URL = 'http://localhost:3001';

export default {
  register: `${BASE_URL}/register`,
  adminRegister: `${BASE_URL}/admin/manage`,
  // a rota adminDelete espera um id no final
  adminDelete: `${BASE_URL}/admin/manage/delete/`,
  sales: `${BASE_URL}/sales`,
  seller: `${BASE_URL}/seller`,
};
