import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const [goToRegister, setGoToRegister] = useState(false);

  if (goToRegister) {
    return <Navigate to="/register" replace />;
  }

  return (
    <main>
      <p>ESTA É A PÁGINA DE LOGIN</p>
      <button
        type="button"
        onClick={ () => setGoToRegister(true) }
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </main>
  );
}

export default Login;
