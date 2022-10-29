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
          onChange={ handlePassword }
        />
        <button
          type="button"
          onClick={ handleCkick }
        >
          clicar
        </button>
      </form>
    </div>
  );
}
export default Login;
