import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSalesById from '../../api/orderRequest';
import Header from '../../components/Header';
import { updatePrice } from '../../components/Card';
import getTotalPrice from '../customerProducts';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({
    id: 0,
    name: '',
    sellerData: '',
    status: '',
    product: [{ id: 0, unitPrice: '0', quantity: 0 }],
    total_price: '',
  });

  useEffect(() => {
    const getAllSales = async () => {
      const orderDetails = await getSalesById(id);
      setOrder(orderDetails);
    };
    getAllSales();
  }, [id]);

  function formatDate() {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

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
          {formatDate()}
        </p>
        <p
          data-testid="
          customer_order_details__element-order-details-label-delivery-status"
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
        {order.product.map((item, index) => (
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
              {item.name}
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
              {item.price(updatePrice(getTotalPrice()))}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {((item.price.updatePrice(getTotalPrice())))}
            </td>
          </tr>
        ))}
      </table>
      <h2 data-testid="customer_order_details__element-order-total-price">
        { `Total: R$ ${order.total_price.updatePrice(getTotalPrice())}` }
      </h2>
    </div>
  );
}

export default OrderDetails;
