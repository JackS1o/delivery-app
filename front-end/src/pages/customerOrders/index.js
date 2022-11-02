import React from 'react';
import Header from '../../components/Header';

function CustumerOrder() {
  return (
    <div>
      <Header />
      <section>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          pedido nº tal
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          vendedor: nome tal
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          data da venda: dd/mm/aa
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          marcar como entregue
        </button>
      </section>
      <section>
        <p
          data-testid="customer_order_details__element-order-table-item-number-<index>"
        >
          1 (ordem do item no array de pedidos)
        </p>
        <p
          data-testid="customer_order_details__element-order-table-name-<index>"
        >
          nome do item
        </p>
        <p
          data-testid="customer_order_details__element-order-table-quantity-<index>"
        >
          quantidade
        </p>
        <p
          data-testid="customer_order_details__element-order-table-unit-price-<index>"
        >
          valor unitário
        </p>
        <p
          data-testid="customer_order_details__element-order-table-sub-total-<index>"
        >
          sub-total
        </p>
      </section>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        total: valor
      </p>
    </div>
  );
}
export default CustumerOrder;
