import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import OrderDetailTable from '../../components/orderDetail/orderDetail';
import { getSalesById } from '../../api/request';

const dataTestid = 'customer_order_details__element-order-details-label-';

export default function CustomerOrderDetail() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({
    id: 0,
    sellerName: '',
    sale_date: '',
    status: '',
    products: [{ id: 0, productPrice: '0', quantity: 0 }],
    total_price: '0',
  });

  useEffect(() => {
    const getOrderById = async () => {
      const result = await getSalesById(order.id);
      setOrder(result);
      setProducts(result.products);
    };
    getOrderById();
  }, [order.id]);

  function dataAtualFormatada(date) {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${`${dia}/${mes}/${ano}`}`;
  }

  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      <div>
        <p data-testid={ `${dataTestid}order-id` }>
          { `${order.id}` }
        </p>
        <p data-testid={ `${dataTestid}seller-name` }>
          { `${order.sellerName}` }
        </p>
        <p data-testid={ `${dataTestid}order-date` }>
          { `${dataAtualFormatada(order.sale_date)}` }
        </p>
        <p
          data-testid={ `${dataTestid}delivery-status` }
        >
          { order.status }
        </p>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          disabled={ order.status !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <div>
        {products && (
          <OrderDetailTable
            Products={ products }
          />
        )}
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Total: R$ ${order.total_price}` }
        </p>
      </div>
    </div>
  );
}
