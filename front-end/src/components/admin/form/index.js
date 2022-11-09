import React, { useState, useContext } from 'react';
import createUser from '../../../api/createUser';
import { registerIsDisabled } from '../../../helpers/validations';
import SaleContext from '../../../context/saleContext';
import userRequest from '../../../api/userRequest';
import RegisterError from '../../registerError';

function Form() {
  const { setUser } = useContext(SaleContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getRole, setGetRole] = useState('seller');
  const [invalidUser, setInvalidUser] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleEmail = ({ target }) => {
    setInvalidUser(false);
    setEmail(target.value);
  };
  const handleRole = ({ target }) => {
    setGetRole(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleName = ({ target }) => {
    setInvalidUser(false);
    setName(target.value);
  };
  const LS = () => {
    const checkToken = JSON.parse(localStorage.getItem('user')).token;
    return checkToken;
  };
  const requestApi = async () => {
    const result = await userRequest();
    setUser(result);
  };
  const handleClick = async () => {
    const returnLS = LS();
    try {
      const dataUser = { name, email, password };
      await createUser(dataUser, getRole, returnLS);
      requestApi();
      setInvalidUser(false);
    } catch ({ response: { data: { message } } }) {
      setErrMsg(message);
      setInvalidUser(true);
    }
    // if (checkUser) {
    // const dataUser = { name, email, password };
    // const newUser = await createUser(dataUser, getRole, returnLS);
    // requestApi();
    // if (newUser.message === 'Name already registered'
    // || newUser.message === 'Email already registered') {
    //   setInvalidUser(true);
    // }
    // setInvalidUser(false);
    // }
  };

  return (
    <div>
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
          disabled={ registerIsDisabled({ name, email, password }) }
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ handleClick }
        >
          CADASTRAR
        </button>
      </form>
      {invalidUser && (
        <RegisterError
          message={ errMsg }
          type="admin"
        />
      )}
    </div>
  );
}
export default Form;
