import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/orderCards';
import saleContext from '../../context/saleContext';
import { getSales } from '../../api/request';

function CustumerOrder() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { setSaleCard } = useContext(saleContext);
  useEffect(() => {
    const API = async () => {
      const requestAPI = await getSales();
      const filteredOrders = requestAPI.filter((item) => item.userId === user.id);
      setSaleCard(filteredOrders);
    };
    API();
  }, []);

  return (
    <div>
      <Header />
      <OrderCard />
    </div>
  );
}
export default CustumerOrder;
