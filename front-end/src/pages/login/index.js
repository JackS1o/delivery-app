import React, { useState } from 'react';
import requestApi from '../../api/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleCkick = async () => {
    const callApi = await requestApi(email, password);
    console.log(callApi);
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
          onClick={ handleCkick }
        >
          clicar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          cadastrar
        </button>
      </form>
    </div>
  );
}
export default Login;
