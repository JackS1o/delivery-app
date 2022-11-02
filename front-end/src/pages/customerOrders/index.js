import React from 'react';
import Header from '../../components/Header';

function CustumerOrder() {
  return (
    <div>
      <Header />
      <section>
        <p
          data-testid="customer_orders__element-order-id-<id>"
        >
          pedido nº tal
        </p>
        <p
          data-testid="customer_orders__element-delivery-status-<id>"
        >
          status do pedido
        </p>
        <p
          data-testid="customer_orders__element-order-date-<id>"
        >
          data da venda: dd/mm/aa
        </p>
        <p
          data-testid="customer_orders__element-card-price-<id>"
        >
          preço do pedido
        </p>
      </section>
    </div>
  );
}
export default CustumerOrder;
