import Header from '../../components/header/Header';

export default function AdminManage() {
  return (
    <div>
      <Header />
      <section>
        <h3>Cadastrar novo usuário</h3>
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
      </section>
      <section>
        <h3>Lista de usuários</h3>
        <table>
          <thead>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </thead>
          <tbody>
            <td
              data-testid="admin_manage__element-user-table-item-number-<index>"
            >
              nº id
            </td>
            <td data-testid="admin_manage__element-user-table-name-<index>">Fulana</td>
            <td
              data-testid="admin_manage__element-user-table-email-<index>"
            >
              fulana@deliveryapp.com
            </td>
            <td
              data-testid="admin_manage__element-user-table-role-<index>"
            >
              P. Vendedora
            </td>
            <button
              type="button"
              data-testid="admin_manage__element-user-table-remove-<index>"
            >
              Excluir
            </button>

          </tbody>
        </table>
      </section>
    </div>
  );
}
