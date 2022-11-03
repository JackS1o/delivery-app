import React from 'react';
import Header from '../../components/Header';

function OrderDetails() {
  const [order] = useState({
    id: 0,
    name: '',
    date: '',
    status: '',
    products: [],
    price: '',
  });

  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      <div>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          PEDIDO
          {order.id}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {order.name}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {order.date}
        </p>
        <p
          data-testid="
          customer_order_details__element-order-details-label-delivery-status<index>"
        >
          {order.status}
        </p>
        <button
          type="button"
          name="button-details-check"
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
          {' '}
        </button>
      </div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        {order.products.map((item, index) => (
          <tr key={ item.productId }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              {item.productName}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {item.quantity}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              {item.updatePrice(getTotalPrice())}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {((item.updatePrice(getTotalPrice())) * item.quantity)}
            </td>
          </tr>
        ))}
      </table>
      <h2 data-testid="customer_order_details__element-order-total-price">
        { `Total: R$ ${order.price.updatePrice(getTotalPrice())}` }
      </h2>
    </div>
  );
}

export default OrderDetails;
