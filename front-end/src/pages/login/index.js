import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <main>
      <p>ESTA É A PÁGINA DE LOGIN</p>
      <button
        type="button"
        onClick={ () => navigate('/register') }
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </main>
  );
}

export default Login;
