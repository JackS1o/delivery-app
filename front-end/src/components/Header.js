import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history('/login');
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
