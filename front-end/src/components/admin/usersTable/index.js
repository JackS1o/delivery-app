import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SaleContext from '../../../context/saleContext';
import userRequest from '../../../api/userRequest';
import deleteUser from '../../../api/deleteUser';
import { getUserFromLS } from '../../../helpers/localStorage';

function Table() {
  const { users, setUser } = useContext(SaleContext);
  const navigate = useNavigate();

  useEffect(() => {
    userRequest()
      .then((response) => setUser(response.filter((item) => (
        item.role !== 'administrator'))));
  }, []);
  const handleClick = async (user) => {
    const loggedUser = getUserFromLS();
    if (!loggedUser) {
      navigate('/login');
    }
    await deleteUser(user.id, loggedUser.token);
    setUser(users.filter((remainUser) => remainUser.id !== user.id));
  };
  const renderUsersTable = () => {
    const mapUsers = users.map((user, index) => (
      <tr key={ user.id }>
        <td
          data-testid={ `admin_manage__element-user-table-item-number-${index}` }
        >
          {user.id}
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-name-${index}` }
        >
          {user.name}
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-email-${index}` }
        >
          {user.email}
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-role-${index}` }
        >
          {user.role}
        </td>
        <button
          type="button"
          onClick={ () => handleClick(user) }
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
        >
          Excluir
        </button>
      </tr>
    ));
    return mapUsers;
  };
  return (
    <table>
      <thead>
        <th>Item</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </thead>
      <tbody>
        {renderUsersTable()}
      </tbody>
    </table>
  );
}
export default Table;
