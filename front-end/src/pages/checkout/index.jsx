import React from 'react';

function Checkout() {
  return (
    <div>
      <header>
        <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
        <div
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </div>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome do Usuário
        </div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </header>
      <h3>Finalizar Pedido</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        <tr>
          <td
            data-testid="customer_checkout__element-order-table-item-number-1"
          >
            1
          </td>
          <td
            data-testid="customer_checkout__element-order-table-name-1"
          >
            Camisa
          </td>
          <td
            data-testid="customer_checkout__element-order-table-quantity-1"
          >
            1
          </td>
          <td
            data-testid="customer_checkout__element-order-table-unit-price-1"
          >
            R$ 50,00

          </td>
          <td
            data-testid="customer_checkout__element-order-table-sub-total-1"
          >
            R$ 50,00

          </td>
          <td>
            <button
              type="button"
              data-testid="customer_checkout__element-order-table-remove-1"
            >
              Remover
            </button>
          </td>
        </tr>
      </table>
      <section>
        <h1 data-testid="customer_checkout__element-order-total-price">Total</h1>
        <h3>Detalhes e Endereço para Entrega</h3>
        <div>
          <span>P.Vendedora Responsável</span>
          <select data-testid="customer_checkout__select-seller">
            <option value="option1">Vendedora 1</option>
          </select>
        </div>
        <div>
          <span>Endereço</span>
          <input type="text" data-testid="customer_checkout__input-address" />
        </div>
        <div>
          <span>Número</span>
          <input type="number" data-testid="customer_checkout__input-address-number" />
        </div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </section>
    </div>
  );
}

export default Checkout;
