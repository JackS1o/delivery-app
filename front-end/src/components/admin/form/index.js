import React, { useState } from 'react';
import createUser from '../../../api/createUser';
import isNewUserValid from '../../../helpers/isNewUserValid';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getRole, setGetRole] = useState('seller');
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleRole = ({ target }) => {
    setGetRole(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleName = ({ target }) => {
    setName(target.value);
  };
  const LS = () => {
    const checkToken = JSON.parse(localStorage.getItem('user')).token;
    return checkToken;
  };
  const handleClick = async () => {
    const returnLS = LS();
    const checkUser = isNewUserValid({ name, email, password });
    if (checkUser) {
      const dataUser = { name, email, password };
      await createUser(dataUser, getRole, returnLS);
    }
  };

  return (
    <form>
      <label htmlFor="nome-novo-usuario">
        Nome
        <input
          data-testid="admin_manage__input-name"
          type="text"
          name="name"
          value={ name }
          onChange={ handleName }
          placeholder="nome e sobrenome"
          id="nome-novo-usuario"
        />
      </label>
      <label htmlFor="email-novo-usuario">
        Email
        <input
          data-testid="admin_manage__input-email"
          type="email"
          name="email"
          value={ email }
          placeholder="email"
          id="email-novo-usuario"
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="senha-novo-usuario">
        Senha
        <input
          data-testid="admin_manage__input-password"
          type="password"
          name="password"
          value={ password }
          onChange={ handlePassword }
          placeholder="senha"
          id="senha-novo-usuario"
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        id="tipo-novo-usuario"
        name="tipo"
        onChange={ handleRole }
        value={ getRole }
      >
        <option value="seller">vendedor</option>
        <option value="customer">cliente</option>
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="button"
        onClick={ handleClick }
      >
        CADASTRAR
      </button>
    </form>
  );
}
export default Form;
