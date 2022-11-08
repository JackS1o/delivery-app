import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import OrderDetailTable from '../../components/orderDetails/orderDetail';
import { getSalesById } from '../../api/request';

const dataTestid = 'customer_order_details__element-order-details-label-';

export default function CustomerOrderDetail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getOrderById = async () => {
      const result = await getSalesById(id);
      setOrder(result);
      setProducts(result.products);
    };
    getOrderById();
  }, []);

  function dataAtualFormatada(date) {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${`${dia}/${mes}/${ano}`}`;
  }
  console.log(order);
  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      {order.length > 0 && (

        <div>
          <p data-testid={ `${dataTestid}order-id` }>
            { `${order[0].id}` }
          </p>
          <p data-testid={ `${dataTestid}seller-name` }>
            { `${order.sellerName}` }
          </p>
          <p data-testid={ `${dataTestid}order-date` }>
            { `${dataAtualFormatada(order[0].saleDate)}` }
          </p>
          <p
            data-testid={ `${dataTestid}delivery-status` }
          >
            { order[0].status }
          </p>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled={ order.status !== 'Em Trânsito' }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      )}
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
