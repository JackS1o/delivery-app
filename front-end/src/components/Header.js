import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromLS } from '../helpers/localStorage';
import './Header.css';

function Header() {
  const [user, setUser] = useState({});
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history('/login');
  };

  useEffect(() => {
    setUser(getUserFromLS());
  }, []);

  return (
    <div className="header">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>
      <Link
        to="/user/profile"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
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
