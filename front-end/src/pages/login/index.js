import React, { useState } from 'react';
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

  const handleClick = async (mail, passw) => {
    const callApi = await requestApi(email, password);
    const user = callApi.data;
    if (user.email && user.password === mail && passw) {
      setInvalidUser(true);
    }
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
        >
          cadastrar
        </button>
      </form>
      { invalidUser && console.log('irá para a pag do consumidor')}
    </div>
  );
}
export default Login;
