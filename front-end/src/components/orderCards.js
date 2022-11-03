import React, { useContext } from 'react';
import saleContext from '../context/saleContext';
import './orderCard.css';

function OrderCard() {
  const { saleCard } = useContext(saleContext);
  return (
    <section>
      {saleCard && saleCard.map((item) => (
        <div key={ item.id } className="card-order-container">
          <p
            data-testid={ `customer_orders__element-order-id-${item.id}` }
          >
            {`Pedido ${item.id}`}
          </p>
          <p
            data-testid={ `customer_orders__element-delivery-status-${item.id}` }
          >
            {`${item.status}`}

          </p>
          <p
            data-testid={ `customer_orders__element-order-date-${item.id}` }
          >
            {`${item.date}`}

          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${item.id}` }
          >
            {`${item.price}`}

          </p>
        </div>
      ))}
    </section>
  );
}
export default OrderCard;
