import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="nome-novo-usuario">
        Nome
        <input
          data-testid="admin_manage__input-name"
          type="text"
          placeholder="nome e sobrenome"
          id="nome-novo-usuario"
        />
      </label>
      <label htmlFor="email-novo-usuario">
        Email
        <input
          data-testid="admin_manage__input-email"
          type="email"
          placeholder="email"
          id="email-novo-usuario"
        />
      </label>
      <label htmlFor="senha-novo-usuario">
        Senha
        <input
          data-testid="admin_manage__input-password"
          type="password"
          placeholder="senha"
          id="senha-novo-usuario"
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        id="tipo-novo-usuario"
        name="tipo"
      >
        <option value="seller">vendedor</option>
        <option value="administrator">administrador</option>
        <option value="customer">cliente</option>
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="button"
      >
        CADASTRAR
      </button>
    </form>
  );
}
export default Form;
