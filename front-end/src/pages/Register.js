import { useState } from 'react';
import axios from 'axios';
import RegisterError from '../components/RegisterError';
import { INITIAL_NEW_USER } from '../helpers/initialStates';
import endpoints from '../helpers/backendEndpoints';
import isNewUserValid from '../helpers/isNewUserValid';

function Register() {
  const [newUser, setNewUser] = useState(INITIAL_NEW_USER);
  const [serverResponse, setServerResponse] = useState({});
  const [showError, setShowError] = useState(false);
  const [unableToRegister, setUnableToRegister] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setShowError(false);
    setNewUser((prevNewUser) => ({
      ...prevNewUser,
      [name]: value,
    }));
    setUnableToRegister(!isNewUserValid(newUser));
  };

  const sendToServer = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: endpoints.register,
        data: { ...newUser },
      });
      setServerResponse(data);
    } catch ({ response: { data: { message } } }) {
      setServerResponse({ message });
      setShowError(true);
    }
  };

  return (
    <form onSubmit={ sendToServer }>
      <h1>Cadastro</h1>
      <input
        type="text"
        name="name"
        value={ newUser.name }
        placeholder="Seu nome"
        data-testid="common_register__input-name"
        onChange={ handleChange }
      />
      <input
        type="email"
        name="email"
        value={ newUser.email }
        placeholder="seu-email@site.com.br"
        data-testid="common_register__input-email"
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        value={ newUser.password }
        placeholder="**********"
        data-testid="common_register__input-password"
        onChange={ handleChange }
      />
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ unableToRegister }
      >
        CADASTRAR
      </button>
      {
        showError && <RegisterError message={ serverResponse.message } />
      }
    </form>
  );
}

export default Register;
