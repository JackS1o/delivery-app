import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestApi from '../../api/index';
import { loginIsDisabled } from '../../helpers/validations';

// - 5: common_login__element-invalid-email [Elemento oculto (Mensagens de erro)];
// data-testid pra mensagem de erro;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState(false);
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const navigate = useNavigate();

  const handleClick = async () => {
    const callApi = await requestApi({ email, password });
    if (callApi.message === 'Usuário não existe') {
      return setInvalidUser(true);
    }
    navigate('/customer/products');
  };

  return (
    <div>
      <form>
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          value={ email }
          placeholder="Insira seu Email"
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
          clicar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          cadastrar
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
