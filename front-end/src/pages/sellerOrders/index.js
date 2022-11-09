import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSales from '../../api/getSales';
import Header from '../../components/header/Header';
import SaleCard from '../../components/saleCard';
import { getUserFromLS } from '../../helpers/localStorage';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSalesFromDB = async () => {
      const user = getUserFromLS();
      if (!user) {
        navigate('/login');
      }
      const newSales = await getSales(user.id);
      setSales(newSales);
    };
    getSalesFromDB();
  }, [navigate]);

  return (
    <div>
      <Header />
      <main>
        {
          sales.map((sale) => (
            <button
              type="button"
              key={ sale.id }
              onClick={ () => navigate(`/seller/orders/${sale.id}`) }
            >
              <SaleCard
                sale={ sale }
              />
            </button>
          ))
        }
      </main>
    </div>
  );
}
