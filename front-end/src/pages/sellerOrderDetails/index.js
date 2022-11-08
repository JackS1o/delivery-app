import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { sellerOrder, sellerProducts } from '../../api/sellerOrderDetails';

function SellerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState();

  useEffect(() => {
    sellerOrder(id).then((response) => setOrder(response));
    sellerProducts(id).then((response) => setProducts(response));
  }, []);

  const getDate = (orders) => {
    const date = new Date(orders[0]?.saleDate);
    return date.toLocaleString(
      'pt-BR',
      { dateStyle: 'short' },
    );
  };

  const result = products?.products.reduce((acc, curr) => {
    const totalValue = Number(curr.price * curr.product.quantity);
    return (acc + totalValue);
  }, 0);

  return (
    <div>
      <Header />
      <h1>Detalhes de Pedido</h1>
      <div>
        <p
          data-testid={ `
        seller_order_details__element-order-details-label-order-${order[0]?.id}` }
        >
          {`Pedido - ${order[0]?.id}`}
        </p>
        <p
          data-testid={ `
        seller_order_details__element-order-details-label-order-date` }
        >
          {getDate(order)}
        </p>
        <p
          data-testid={ `
            seller_order_details__element-order-details-label-delivery-status` }
        >
          {order[0]?.status}
        </p>
        <p data-testid="seller_order_details__button-preparing-check">
          Preparar Pedido
        </p>
        <p data-testid="seller_order_details__button-dispatch-check">
          Saiu Para Entrega
        </p>
        <table>
          <thead>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            {products?.products.map((prod, index) => (
              <tr key={ index }>
                <td
                  data-testid={ `
                  seller_order_details__element-order-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  {prod.name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {prod.product.quantity}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {prod.price.toString().replace('.', ',')}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {(prod.price * prod.product.quantity).toString().replace('.', ',')}
                </td>
              </tr>
            ))}
          </thead>
          <span
            data-testid={ `seller_orders__element-delivery-status-${order[0]?.id}` }
          />
          <div>{`Total: R$${result?.toFixed(2).toString().replace('.', ',')}`}</div>
        </table>
      </div>
    </div>
  );
}

export default SellerOrderDetails;
