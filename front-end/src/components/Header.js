import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history('/login');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="header">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/pedidos"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>
      <Link
        to="/user/profile"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user}
      </Link>
      <button
        type="button"
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </div>
  );
}

export default Header;
