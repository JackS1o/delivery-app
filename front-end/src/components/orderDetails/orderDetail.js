import React from 'react';
import PropTypes from 'prop-types';
import { updatePrice } from '../Card/Card';
import getTotalPrice from '../../pages/customerProducts';

export default function OrderDetailTable({ Products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {Products.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={ `customer_order_details_
              _element-order-table-item-number-${index}` }
            >
              { index + 1 }
            </td>
            <td
              data-testid={ `customer_order_details_
              _element-order-table-name-${index}` }
            >
              { product.name }
            </td>
            <td
              data-testid={ `customer_order_details_
              _element-order-table-quantity-${index}` }
            >
              { quantity }
            </td>
            <td
              data-testid={ `customer_order_details_
              _element-order-table-unit-price-${index}` }
            >
              { product.price.updatePrice(getTotalPrice) }
            </td>
            <td
              data-testid={ `customer_order_details_
              _element-order-table-sub-total-${index}` }
            >
              { updatePrice(getTotalPrice) }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderDetailTable.propTypes = {
  Products: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
