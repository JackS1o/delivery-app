import { useState } from 'react';

function Register() {
  const [errorSpan, setErrorSpan] = useState('none');

  const showHideError = () => {
    setErrorSpan(
      errorSpan === 'none' ? 'flex' : 'none',
    );
  };

  return (
    <form>
      <h1>Cadastro</h1>
      <input
        type="text"
        placeholder="Seu nome"
        data-testid="common_register__input-name"
      />
      <input
        type="email"
        placeholder="seu-email@site.com.br"
        data-testid="common_register__input-email"
      />
      <input
        type="password"
        placeholder="**********"
        data-testid="common_register__input-password"
      />
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      <button
        type="button"
        onClick={ showHideError }
      >
        TESTAR SPAN DE ERRO
      </button>
      <span
        style={ { display: errorSpan } }
        data-testid="common_register__element-invalid_register"
      >
        <p>ALGO DEU ERRADO NO SEU CADASTRO</p>
      </span>
    </form>
  );
}

export default Register;
