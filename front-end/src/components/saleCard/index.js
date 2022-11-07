import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updatePrice } from '../Card/Card';
import styles from './index.module.css';

export default function SaleCard({ sale }) {
  const getDate = () => {
    const date = new Date(sale.saleDate);
    return date.toLocaleString(
      'pt-BR',
      { dateStyle: 'short' },
    );
  };

  return (
    <Link
      to={ `/seller/orders/${sale.id}` }
      className={ styles.container }
    >
      <div className={ styles.blockOne }>
        <p>Pedido</p>
        <p
          data-testid={ `seller_orders__element-order-id-${sale.id}` }
        >
          { sale.id }
        </p>
      </div>
      <div className={ styles.blockTwo }>
        <div className={ styles.blockThree }>
          <p
            data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </p>
          <div>
            <p
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              { getDate() }
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${sale.id}` }
            >
              { `R$ ${updatePrice(sale.totalPrice)}` }
            </p>
          </div>
        </div>
        <p
          data-testid={ `seller_orders__element-card-address-${sale.id}` }
        >
          { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
        </p>
      </div>
    </Link>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    sellerId: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
