import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestApi from '../../api/index';
import { saveUserOnLS } from '../../helpers/localStorage';
import redirectByRole from '../../helpers/redirectByRole';
import { loginIsDisabled } from '../../helpers/validations';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const checkLS = localStorage.getItem('user');
    if (checkLS) {
      const getUser = JSON.parse(checkLS);
      redirectByRole(getUser.role, navigate);
    }
  }, []);
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleClick = async () => {
    const callApi = await requestApi({ email, password });
    if (callApi.message === 'Usuário não existe') {
      return setInvalidUser(true);
    }
    saveUserOnLS(callApi);
    redirectByRole(callApi.role, navigate);
  };

  return (
    <div>
      <form>
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          value={ email }
          placeholder="Insira seu email"
          onChange={ handleEmail }
        />
        <input
          type="password"
          name="password"
          value={ password }
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          onChange={ handlePassword }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ loginIsDisabled({ email, password }) }
          onClick={ handleClick }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          Cadastrar
        </button>
      </form>
      {invalidUser && (
        <span data-testid="common_login__element-invalid-email">
          Email ou senha inválidos
        </span>
      )}
    </div>
  );
}
export default Login;
