import React, { useState } from 'react';
import Header from '../../components/Header';
import { getSales } from '../../api/request';

function CustumerOrder() {
  const [id, setId] = useState(0);
  const [status, setStatus] = useState('pendente');
  const [date, setDate] = useState('01/01/2022');
  const [price, setPrice] = useState('1,00');
  const requestAPI = async () => {
    const api = await getSales();
    if (api.length > 0) {
      setId(api.id);
      setStatus(api.status);
      setDate(api.sale_date);
      setPrice(api.total_price);
    }
  };
  requestAPI();
  return (
    <div>
      <Header />
      <section>
        <p
          data-testid="customer_orders__element-order-id-<id>"
        >
          {`Pedido: ${id}`}
        </p>
        <p
          data-testid="customer_orders__element-delivery-status-<id>"
        >
          {`status do pedido: ${status}`}
        </p>
        <p
          data-testid="customer_orders__element-order-date-<id>"
        >
          {`data da venda: ${date}`}
        </p>
        <p
          data-testid="customer_orders__element-card-price-<id>"
        >
          {`preço do pedido: R$ ${price}`}
        </p>
      </section>
    </div>
  );
}
export default CustumerOrder;
