import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createUser from '../../api/createUser';
import deleteUser from '../../api/deleteUser';
import Header from '../../components/header/Header';
import { getUserFromLS } from '../../helpers/localStorage';

export default function AdminManage() {
  const [authorization, setAuthorization] = useState('');
  const [newUserId, setNewUserId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromLS();
    if (!user.token) {
      navigate('/login');
    }
    setAuthorization(user.token);
  }, []);

  return (
    <div>
      <Header />
      <p>Esta é a página de administrador</p>
      <button
        type="button"
        onClick={ async () => {
          const res = await createUser({
            name: 'Matheus Monteiro Schran',
            email: 'teste@teste.com',
            password: 'senha@123',
          }, 'seller', authorization);
          console.log(res);
          setNewUserId(res.data.id);
        } }
      >
        CREATE USER
      </button>
      <button
        type="button"
        onClick={ async () => {
          const res = await deleteUser(newUserId, authorization);
          console.log(res);
        } }
      >
        DELETE USER
      </button>
    </div>
  );
}
