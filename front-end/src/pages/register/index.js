import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterError from '../../components/registerError';
import { INITIAL_NEW_USER } from '../../helpers/initialStates';
import isNewUserValid from '../../helpers/isNewUserValid';
import responseStatus from '../../helpers/responseStatus';
import { saveUserOnLS } from '../../helpers/localStorage';
import redirectByRole from '../../helpers/redirectByRole';
import createUser from '../../api/createUser';

function Register() {
  const [newUser, setNewUser] = useState(INITIAL_NEW_USER);
  const [serverResponse, setServerResponse] = useState({});
  const [showError, setShowError] = useState(false);
  const [unableToRegister, setUnableToRegister] = useState(true);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setShowError(false);
    setNewUser((prevNewUser) => {
      setUnableToRegister(!isNewUserValid({
        ...prevNewUser,
        [name]: value,
      }));
      return {
        ...prevNewUser,
        [name]: value,
      };
    });
  };

  const sendToServer = async (event) => {
    event.preventDefault();
    try {
      const res = await createUser(newUser, 'customer');
      console.log(res);
      setServerResponse(res.data);
      if (res.status === responseStatus.created) {
        saveUserOnLS(res.data);
        redirectByRole(res.data.role, navigate);
      }
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
        showError && (
          <RegisterError
            message={ serverResponse.message }
            type="common"
          />
        )
      }
    </form>
  );
}

export default Register;
