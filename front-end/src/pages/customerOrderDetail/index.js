import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import OrderDetailTable from '../../components/orderDetail/orderDetail';
import { getSalesById, getSellerById } from '../../api/request';
import { orderStatus } from '../../api/sellerOrderDetails';

const dataTestid = 'customer_order_details__element-order-details-label-';

export default function CustomerOrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getOrderDetail = async () => {
      const result = await getSalesById(id);
      setOrder(result);
      getSellerById(id).then((sellerName) => setName(sellerName));
    };
    getOrderDetail();
  }, [id, order[0]?.status]);

  function dataAtualFormatada(date) {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${`${dia}/${mes}/${ano}`}`;
  }

  const result = name.items?.products.reduce((acc, curr) => {
    const totalValue = Number(curr.price * curr.product.quantity);
    return (acc + totalValue);
  }, 0);

  const recived = async () => {
    await orderStatus(id, 'Entregue');
    const newOrder = await getSalesById(id);
    setOrder(newOrder);
  };

  return (
    <div>
      <Header />
      <h3>Detalhe do Pedido</h3>
      <div>
        { order?.length > 0 && (
          <div>
            <p data-testid={ `${dataTestid}order-id` }>
              {`Pedido ${order[0].id}` }
            </p>
            <p data-testid={ `${dataTestid}seller-name` }>
              { `P.Vend: ${name.seller?.name}` }
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
              disabled={ order[0].status !== 'Em Trânsito' }
              onClick={ recived }
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
        )}
      </div>
      <div>
        <OrderDetailTable
          Products={ name.items?.products }
        />
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          {`Total: R$${result?.toFixed(2).toString().replace('.', ',')}`}
        </p>
      </div>
    </div>
  );
}
