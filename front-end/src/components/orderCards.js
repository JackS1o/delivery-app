import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import saleContext from '../context/saleContext';
import './orderCard.css';

function OrderCard() {
  const navigate = useNavigate();
  const { saleCard } = useContext(saleContext);
  const getDate = (item) => {
    const date = new Date(item.saleDate);
    return date.toLocaleString(
      'pt-BR',
      { dateStyle: 'short' },
    );
  };
  return (

    <section>
      {saleCard && saleCard.map((item) => (

        <button
          type="button"
          key={ item.id }
          onClick={ () => navigate(`/customer/orders/${item.userId}`) }
        >
          <div
            className="card-order-container"
            data-testid={ `customer_orders__element-order-id-${item.userId}` }
          >
            <p data-testid={ `customer_orders__element-order-id-${item.id}` }>
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
              {`${getDate(item)}`}

            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${item.id}` }
            >
              {`${Number(item.totalPrice).toFixed(2).replace('.', ',')}`}

            </p>
          </div>
        </button>
      ))}
    </section>

  );
}
export default OrderCard;
