export default (role, navigateHook) => {
  switch (role) {
  case 'customer':
    navigateHook('/customer/products');
    break;
  case 'seller':
    navigateHook('/seller/orders');
    break;
  case 'administrator':
    navigateHook('/admin/manage');
    break;
  default:
    navigateHook('login');
    break;
  }
};
