import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const path = history.location.pathname;
  const logout = () => {
    localStorage.clear();
    path('/login');
  };

  return (
    <div className="header">
      <Link
        to="/cliente/produtos"
      >
        Produtos
      </Link>
      <Link
        to="/pedidos"
      >
        Meus pedidos
      </Link>
      <Link
        to="/usuario"
      >
        {user}
      </Link>
      <button
        type="button"
        onClick={ logout }
      >
        Sair
      </button>
    </div>
  );
}

export default Header;
