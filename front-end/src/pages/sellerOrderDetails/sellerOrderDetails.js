import React from 'react';
import Header from '../../components/Header';

function SellerOrderDetails() {
  return (
    <div>
      <Header />
      <h1>Detalhes de Pedido</h1>
      <div>
        <span
          data-testid={ `
        seller_order_details__element-order-details-label-order-id` }
        >
          Pedido 1
        </span>
        <span
          data-testid={ `
        seller_order_details__element-order-details-label-order-date` }
        >
          10/11/2022
        </span>
        <span
          data-testid={ `
            seller_order_details__element-order-details-label-delivery-status` }
        >
          Status
        </span>
        <span data-testid="seller_order_details__button-preparing-check">
          Preparar Pedido
        </span>
        <span data-testid="seller_order_details__button-dispatch-check">
          Saiu Para Entrega
        </span>
        <table>
          <thead>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            {orders.map((order, index) => (
              <tr key={ index }>
                <td
                  data-testid={ `
                  seller_order_details__element-order-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  description
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  quantity
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  price
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  subTotal
                </td>
              </tr>
            ))}
          </thead>
          <div>Total</div>
        </table>
      </div>
    </div>
  );
}

export default SellerOrderDetails;
