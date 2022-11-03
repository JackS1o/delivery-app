import React from 'react';

function OrderDetails() {
  const SOD = 'seller_order_details__';
  return (
    <div>
      <h3>Detalhe do Pedido</h3>
      <section>
        <p data-testid={ `${SOD}element-order-details-label-order-id` }>PEDIDO Nº</p>
        <p data-testid={ `${SOD}element-order-details-label-order-date` }>DD/MM/AA</p>
        <p
          data-testid={ `${SOD}element-order-details-label-delivery-status` }
        >
          STATUS DA VENDA
        </p>
        <button
          data-testid={ `${SOD}button-preparing-check` }
          type="button"
        >
          STATUS DA ENTREGA
        </button>
      </section>
      <table>
        <thead>
          <th> Item </th>
          <th> Descrição </th>
          <th> Quantidade </th>
          <th>Valor Unitário</th>
          <th> Sub-total </th>
        </thead>
        <tbody>
          <tr>
            <td data-testid={ `${SOD}element-order-table-item-number-<index>` }>1</td>
            <td data-testid={ `${SOD}element-order-table-name-<index>` }>skol</td>
            <td data-testid={ `${SOD}element-order-table-quantity-<index>` }>2</td>
            <td data-testid={ `${SOD}element-order-table-unit-price-<index>` }>3,00</td>
            <td data-testid={ `${SOD}element-order-table-sub-total-<index>` }>6,00</td>
          </tr>
        </tbody>
      </table>
      <section>
        <p data-testid={ `${SOD}element-order-total-price` }> Total: R$ </p>
      </section>
    </div>
  );
}
export default OrderDetails;
