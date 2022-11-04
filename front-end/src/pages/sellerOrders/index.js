import { useEffect, useState } from 'react';
import getSales from '../../api/getSales';
import Header from '../../components/Header';
import SaleCard from '../../components/saleCard';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSalesFromDB = async () => {
      const newSales = await getSales();
      setSales(newSales);
    };
    getSalesFromDB();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {
          sales.map((sale) => (
            <SaleCard
              key={ sale.id }
              sale={ sale }
            />
          ))
        }
      </main>
    </div>
  );
}
