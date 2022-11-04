import PropTypes from 'prop-types';
import { updatePrice } from '../Card';
import styles from './index.module.css';

export default function SaleCard({ sale }) {
  const getDate = () => (
    sale.saleDate.toLocaleString(
      'pt-BR',
      { dateStyle: 'short' },
    )
  );

  return (
    <div className={ styles.container }>
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
    </div>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.number,
    sellerId: PropTypes.number,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
    saleDate: PropTypes.instanceOf(Date),
    status: PropTypes.string,
  }).isRequired,
};
