import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/orderCards';
import saleContext from '../../context/saleContext';
// import { getSales } from '../../api/request';
import salesMock from '../../helpers/salesMock';

function CustumerOrder() {
  const { saleCard, setSaleCard } = useContext(saleContext);
  useEffect(() => {
    const mock = salesMock;
    if (mock.length > 0) {
      const getAllSales = mock.map((item) => {
        const data = {
          id: item.id,
          status: item.status,
          date: item.sale_date,
          price: item.total_price,
        };
        return data;
      });
      setSaleCard(getAllSales);
    }
  }, []);
  console.log(saleCard);
  return (
    <div>
      <Header />
      <OrderCard />
    </div>
  );
}
export default CustumerOrder;
